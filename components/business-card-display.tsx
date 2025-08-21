import { Mail, MessageCircle } from "lucide-react"

export function BusinessCardDisplay() {
  return (
    <div className="bg-black text-white p-8 max-w-md mx-auto rounded-lg">
      <div className="text-center space-y-6">
        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white">Habtamu Nuriye</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          <p className="text-xl text-white font-medium">International Logistics Manager</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-left mt-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Mail className="w-5 h-5 text-black" />
            </div>
            <div className="space-y-1">
              <p className="text-white font-medium text-lg">habtamu1970@gmail.com</p>
              <p className="text-white/90 text-base">habtnur@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MessageCircle className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="text-white font-medium text-lg">WhatsApp</p>
              <p className="text-white/90 text-base">+251911687502</p>
            </div>
          </div>
        </div>

        {/* Professional tagline */}
        <div className="pt-6 mt-8 border-t border-gray-700">
          <p className="text-white/80 text-base italic">
            "Connecting global supply chains with precision and reliability"
          </p>
        </div>
      </div>
    </div>
  )
}
