
interface Region {
  id: string;
  name: string;
  position: { top: string; left: string };
  ingredients: string[];
  description: string;
  climate: string;
  harvest: string;
}

interface MapRegionMarkerProps {
  region: Region;
  isSelected: boolean;
  onSelect: () => void;
}

const MapRegionMarker = ({ region, isSelected, onSelect }: MapRegionMarkerProps) => {
  return (
    <>
      {/* Marker Button */}
      <button
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-3 border-white transition-all duration-300 hover:scale-110 z-10 ${
          isSelected
            ? 'bg-copper-600 scale-125 shadow-lg ring-4 ring-copper-200'
            : 'bg-copper-400 hover:bg-copper-500 shadow-md'
        }`}
        style={{
          top: region.position.top,
          left: region.position.left,
        }}
        onClick={onSelect}
      >
        <span className="sr-only">{region.name}</span>
        {/* Inner dot for better visibility */}
        <div className="absolute inset-2 bg-white rounded-full opacity-80"></div>
      </button>

      {/* Region Label */}
      <div
        className={`absolute transform -translate-x-1/2 pointer-events-none transition-all duration-300 ${
          isSelected ? 'scale-110' : ''
        }`}
        style={{
          top: `calc(${region.position.top} + 24px)`,
          left: region.position.left,
        }}
      >
        <span className={`text-xs font-medium px-3 py-1 rounded-full shadow-sm ${
          isSelected 
            ? 'bg-copper-600 text-white' 
            : 'bg-white/90 text-clay-700 border border-copper-200'
        }`}>
          {region.name}
        </span>
      </div>

      {/* Selection indicator ring */}
      {isSelected && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-copper-400 animate-ping pointer-events-none"
          style={{
            top: region.position.top,
            left: region.position.left,
          }}
        />
      )}
    </>
  );
};

export default MapRegionMarker;
