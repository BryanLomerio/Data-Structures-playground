const DataStructureCard = ({ title, description, onClick, image, className, available = true }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow ${className}`}
      onClick={onClick}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {!available && (
          <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default DataStructureCard

