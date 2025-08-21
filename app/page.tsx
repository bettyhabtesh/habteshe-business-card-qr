import { BusinessCardDisplay } from "@/components/business-card-display"
import { PrintableBusinessCard } from "@/components/printable-business-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Business Card Generator</h1>
          <p className="text-muted-foreground text-lg">Modern business card with QR code functionality</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Digital Business Card</h2>
            <p className="text-muted-foreground">This is what users see when they scan your QR code</p>
            <BusinessCardDisplay />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Printable Business Card</h2>
            <p className="text-muted-foreground">Print-ready design with QR code</p>
            <PrintableBusinessCard />
          </div>
        </div>
      </div>
    </div>
  )
}
