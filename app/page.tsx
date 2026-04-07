import { Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top accent bar */}
      <div className="h-2 bg-secondary" />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Logo / Emblem area */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
            <span className="text-primary-foreground text-3xl md:text-4xl font-bold">118</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center text-balance">
            American Legion Post 118
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Veterans Serving Veterans
          </p>
        </div>

        {/* Under Construction Card */}
        <Card className="w-full max-w-md border-2 border-border shadow-md">
          <CardContent className="pt-6 pb-8 px-6 text-center">
            {/* Stylized American Flag */}
            <div className="w-20 h-14 mb-4 rounded overflow-hidden shadow-md flex flex-col">
              {/* Stars section */}
              <div className="flex">
                <div className="w-8 h-7 bg-primary flex flex-wrap items-center justify-center gap-px p-1">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="text-[6px] text-primary-foreground leading-none">&#9733;</span>
                  ))}
                </div>
                {/* Top stripes next to stars */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 bg-secondary" />
                  <div className="flex-1 bg-white" />
                  <div className="flex-1 bg-secondary" />
                </div>
              </div>
              {/* Bottom stripes */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-secondary" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-secondary" />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Website Under Construction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are working hard to bring you a new and improved website. 
              Please check back soon for updates about our Post, events, and programs.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-10 w-full max-w-md">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide text-center mb-4">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3">
            <a 
              href="tel:+13177454736" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-foreground text-sm md:text-base">(317) 745-4736</span>
            </a>
            <div className="flex items-start gap-3 px-4 py-3 rounded-lg bg-card border border-border">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm md:text-base">
                846 S SR-39<br />
                Danville, IN 46122
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border bg-card">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Still Serving America
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            American Legion Post 118
          </p>
        </div>
      </footer>

      {/* Bottom accent bar */}
      <div className="h-2 bg-primary" />
    </main>
  )
}
