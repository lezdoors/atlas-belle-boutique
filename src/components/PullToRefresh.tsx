
import { useState, useRef, useEffect, ReactNode } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
  className?: string;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({ 
  onRefresh, 
  children, 
  className = '' 
}) => {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pullThreshold = 80;
  const maxPullDistance = 120;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setTouchStart(e.targetTouches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || window.scrollY > 0) return;

    const currentTouch = e.targetTouches[0].clientY;
    const diff = currentTouch - touchStart;

    if (diff > 0) {
      e.preventDefault();
      const distance = Math.min(diff * 0.5, maxPullDistance);
      setPullDistance(distance);
      setIsPulling(distance > 20);
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance > pullThreshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setIsPulling(false);
    setPullDistance(0);
    setTouchStart(null);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull to refresh indicator */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-copper-50 transition-all duration-200 overflow-hidden"
        style={{
          height: `${pullDistance}px`,
          transform: `translateY(-${pullDistance}px)`,
        }}
      >
        <div className="flex items-center space-x-2 text-copper-600">
          <RefreshCw 
            className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''} ${
              pullDistance > pullThreshold ? 'rotate-180' : ''
            } transition-transform duration-200`} 
          />
          <span className="text-sm font-medium">
            {isRefreshing 
              ? 'Refreshing...' 
              : pullDistance > pullThreshold 
                ? 'Release to refresh' 
                : 'Pull to refresh'
            }
          </span>
        </div>
      </div>

      {children}
    </div>
  );
};

export default PullToRefresh;
