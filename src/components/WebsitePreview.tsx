import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface WebsitePreviewProps {
  url: string;
  title: string;
  className?: string;
}

export function WebsitePreview({ url, title, className = "" }: WebsitePreviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Generate screenshot URL using a public screenshot service
  const getScreenshotUrl = (websiteUrl: string) => {
    return `https://api.screenshotone.com/take?access_key=demo&url=${encodeURIComponent(websiteUrl)}&viewport_width=1280&viewport_height=720&device_scale_factor=1&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=false&delay=0&timeout=60`;
  };

  const fallbackEmoji = title.includes("LinkiPax") ? "🚀" : "📚";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError && (
        <motion.img
          src={getScreenshotUrl(url)}
          alt={`Preview of ${title}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: imageLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.8 }}
        />
      )}
      
      {/* Fallback or loading state */}
      {(imageError || !imageLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
          <motion.div
            className="text-8xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {fallbackEmoji}
          </motion.div>
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
      
      {/* Live preview indicator */}
      {imageLoaded && !imageError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground flex items-center gap-1"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Live Preview
        </motion.div>
      )}
      
      {/* Preview overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="bg-background/90 backdrop-blur-sm p-3 rounded-full"
        >
          <ExternalLink className="h-6 w-6 text-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}