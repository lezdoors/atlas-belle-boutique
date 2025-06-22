
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewControlsProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ViewControls: React.FC<ViewControlsProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <Button
        variant={viewMode === 'grid' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setViewMode('grid')}
        className="p-2"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={viewMode === 'list' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setViewMode('list')}
        className="p-2"
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewControls;
