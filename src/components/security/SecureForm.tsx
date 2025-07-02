
import { useState, useRef, useEffect, FormHTMLAttributes } from 'react';
import { generateCSRFToken } from '@/utils/securityValidation';

interface SecureFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (data: FormData, csrfToken: string) => void | Promise<void>;
  children: React.ReactNode;
  validateOnSubmit?: boolean;
}

const SecureForm = ({ 
  onSubmit, 
  children, 
  validateOnSubmit = true,
  ...formProps 
}: SecureFormProps) => {
  const [csrfToken] = useState(generateCSRFToken());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      
      if (validateOnSubmit) {
        // Basic client-side validation
        const requiredFields = Array.from(formData.entries()).filter(([key, value]) => 
          event.currentTarget.querySelector(`[name="${key}"][required]`) && !value
        );
        
        if (requiredFields.length > 0) {
          throw new Error('Veuillez remplir tous les champs requis');
        }
      }
      
      await onSubmit(formData, csrfToken);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      {...formProps}
      ref={formRef}
      onSubmit={handleSubmit}
      className={`${formProps.className || ''} ${isSubmitting ? 'opacity-75 pointer-events-none' : ''}`}
    >
      <input type="hidden" name="_csrf" value={csrfToken} />
      {children}
    </form>
  );
};

export default SecureForm;
