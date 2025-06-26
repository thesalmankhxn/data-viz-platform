import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

/**
 * FontDemo component showcases both Inter and Roobert TRIAL fonts
 * Demonstrates how to use different fonts throughout the application
 */
export function FontDemo() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Inter Font Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Inter Font</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black">Black (900) - Main Heading</h1>
            <h2 className="text-3xl font-extrabold">
              Extra Bold (800) - Section Heading
            </h2>
            <h3 className="text-2xl font-bold">
              Bold (700) - Subsection Heading
            </h3>
            <h4 className="text-xl font-semibold">
              Semi Bold (600) - Card Title
            </h4>
            <h5 className="text-lg font-medium">
              Medium (500) - Emphasis Text
            </h5>
            <p className="text-base font-normal">Regular (400) - Body Text</p>
            <p className="text-sm font-light">Light (300) - Secondary Text</p>
            <p className="text-xs font-extralight">
              Extra Light (200) - Caption
            </p>
            <p className="text-xs font-thin">Thin (100) - Fine Print</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Sample Paragraph</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This is a sample paragraph using the Inter font family. Inter is a
              variable font designed for computer screens. It features a tall
              x-height to aid in readability of mixed-case and lower-case text.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Roobert TRIAL Font Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-roobert">
            Roobert TRIAL Font
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 font-roobert">
            <h1 className="text-4xl font-black">Black (900) - Main Heading</h1>
            <h2 className="text-3xl font-extrabold">
              Extra Bold (800) - Section Heading
            </h2>
            <h3 className="text-2xl font-bold">
              Bold (700) - Subsection Heading - Charging Station
            </h3>
            <h4 className="text-xl font-semibold">
              Semi Bold (600) - Card Title
            </h4>
            <h5 className="text-lg font-medium">
              Medium (500) - Emphasis Text
            </h5>
            <p className="text-base font-normal">Regular (400) - Body Text</p>
            <p className="text-sm font-light">Light (300) - Secondary Text</p>
            <p className="text-xs font-extralight">
              Extra Light (200) - Caption
            </p>
            <p className="text-xs font-thin">Thin (100) - Fine Print</p>
          </div>

          <div className="font-roobert">
            <h3 className="font-semibold mb-2">Sample Paragraph</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This is a sample paragraph using the Roobert TRIAL font family.
              Roobert TRIAL is a premium display font with excellent readability
              and modern aesthetics. Perfect for headings and display text.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Usage Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">CSS Classes</h3>
            <div className="text-sm space-y-1">
              <div>
                <code className="bg-muted px-2 py-1 rounded">
                  .font-roobert
                </code>{" "}
                - Use Roobert TRIAL font
              </div>
              <div>
                <code className="bg-muted px-2 py-1 rounded">
                  .font-display
                </code>{" "}
                - Use display font family
              </div>
              <div>
                <code className="bg-muted px-2 py-1 rounded">
                  font-family: 'Roobert TRIAL', sans-serif;
                </code>{" "}
                - Direct CSS
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tailwind Classes</h3>
            <div className="text-sm space-y-1">
              <div>
                <span className="font-thin">font-thin</span> - Thin (100)
              </div>
              <div>
                <span className="font-extralight">font-extralight</span> - Extra
                Light (200)
              </div>
              <div>
                <span className="font-light">font-light</span> - Light (300)
              </div>
              <div>
                <span className="font-normal">font-normal</span> - Regular (400)
              </div>
              <div>
                <span className="font-medium">font-medium</span> - Medium (500)
              </div>
              <div>
                <span className="font-semibold">font-semibold</span> - Semi Bold
                (600)
              </div>
              <div>
                <span className="font-bold">font-bold</span> - Bold (700)
              </div>
              <div>
                <span className="font-extrabold">font-extrabold</span> - Extra
                Bold (800)
              </div>
              <div>
                <span className="font-black">font-black</span> - Black (900)
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Recommended Usage</h3>
            <div className="text-sm space-y-2">
              <div>
                <strong>Inter:</strong> Body text, UI elements, general content
              </div>
              <div>
                <strong>Roobert TRIAL:</strong> Headings, titles, display text,
                branding
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
