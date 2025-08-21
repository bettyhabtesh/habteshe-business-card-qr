"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QRCodeSVG } from "qrcode.react"
import { Mail, MessageCircle, Printer } from "lucide-react"

export function PrintableBusinessCard() {
  const businessCardUrl =
    typeof window !== "undefined" ? `${window.location.origin}/card` : "https://your-domain.com/card"

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-4">
      {/* Print Button */}
      <Button onClick={handlePrint} className="mb-4">
        <Printer className="w-4 h-4 mr-2" />
        Print Business Card
      </Button>

      {/* Business Card - Front Side */}
      <div className="print:break-after-page">
        <Card className="bg-card text-card-foreground p-6 w-[3.5in] h-[2in] mx-auto relative overflow-hidden print:shadow-none print:border-2 print:border-gray-300">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-xl font-bold text-card-foreground leading-tight">Habtamu Nuriye</h1>
              <div className="h-0.5 w-12 bg-accent mx-auto my-1 rounded-full"></div>
              <p className="text-sm text-card-foreground/90 font-medium">International Logistics Manager</p>
            </div>

            {/* QR Code */}
            <div className="absolute bottom-2 right-2">
              <div className="bg-white p-1 rounded">
                <QRCodeSVG value={businessCardUrl} size={48} level="M" includeMargin={false} />
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <p className="text-xs text-card-foreground/70 italic">"Global logistics excellence"</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Business Card - Back Side */}
      <Card className="bg-popover text-popover-foreground p-6 w-[3.5in] h-[2in] mx-auto print:shadow-none print:border-2 print:border-gray-300">
        <div className="h-full flex flex-col justify-center space-y-3">
          <div className="text-center mb-4">
            <div className="w-16 h-0.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-3 h-3 text-accent-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-popover-foreground">habtamu1970@gmail.com</p>
                <p className="text-xs text-popover-foreground/70">habtnur@yahoo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-3 h-3 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium text-popover-foreground">WhatsApp: +251911687502</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-popover-foreground/60">Scan QR code for digital contact</p>
          </div>
        </div>
      </Card>

      {/* QR Code Information */}
      <div className="text-center space-y-2 print:hidden">
        <p className="text-sm text-muted-foreground">
          QR Code links to: <code className="bg-muted px-2 py-1 rounded text-xs">{businessCardUrl}</code>
        </p>
        <p className="text-xs text-muted-foreground">Users who scan this code will see your digital business card</p>
      </div>
    </div>
  )
}
