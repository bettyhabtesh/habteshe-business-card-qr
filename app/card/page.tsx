import { BusinessCardDisplay } from "@/components/business-card-display"

export default function CardPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <BusinessCardDisplay />
      </div>
    </div>
  )
}
