import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="American Legion Hendricks County Post 118 Logo"
              className="h-auto w-full max-w-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                O&apos;Malley Scholarship Program
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/80">
            Each year, American Legion Post 118 is proud to offer the
            O&apos;Malley Scholarship to support students in our community
            pursuing higher education.
          </p>
        </section>

        {/* Action Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Download Card */}
          <Card className="border-2 border-border">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                Download Application Packet
              </h2>
              <p className="mb-6 text-muted-foreground">
                Review the scholarship guidelines, then complete and submit the
                application form.
              </p>
              <div className="flex w-full flex-col gap-3">
                <Button asChild size="lg" className="w-full">
                  <a href="/Post-118-Scholarship-Guidelines.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Scholarship Guidelines
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href="/Post-118-Scholarship-Application.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Application Form
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit Card */}
          <Card className="border-2 border-border">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                Submit Your Application
              </h2>
              <p className="mb-6 text-muted-foreground">
                Email your completed application and supporting documents to our
                scholarship committee.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground sm:w-auto"
              >
                <a href="mailto:scholarships@post118.org">
                  <Mail className="mr-2 h-4 w-4" />
                  scholarships@post118.org
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <section className="mt-12 rounded-lg bg-muted p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about the scholarship program? Contact us at{" "}
            <a
              href="mailto:scholarships@post118.org"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              scholarships@post118.org
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} American Legion Post 118. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
