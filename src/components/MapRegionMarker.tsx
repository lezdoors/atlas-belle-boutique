
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
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
          isSelected
            ? 'bg-copper-600 scale-150 shadow-lg'
            : 'bg-copper-400 hover:bg-copper-500 hover:scale-125'
        }`}
        style={{
          top: region.position.top,
          left: region.position.left,
        }}
        onClick={onSelect}
      >
        <span className="sr-only">{region.name}</span>
      </button>

      {/* Region Label */}
      <div
        className="absolute transform -translate-x-1/2 pointer-events-none"
        style={{
          top: `calc(${region.position.top} + 20px)`,
          left: region.position.left,
        }}
      >
        <span className="text-xs font-medium text-clay-700 bg-white/80 px-2 py-1 rounded-full">
          {region.name}
        </span>
      </div>
    </>
  );
};

export default MapRegionMarker;
