import { Button } from "@/components/Button";
import { getDictionary } from "@/i18n/content";

export default async function NotFound() {
  const { ui } = await getDictionary();
  return (
    <div className="site-container flex flex-1 flex-col items-start justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-wider text-mute">
        404
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
        {ui.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-sub">
        {ui.notFoundDesc}
      </p>
      <div className="mt-6">
        <Button variant="secondary" href="/">
          {ui.notFoundBack}
        </Button>
      </div>
    </div>
  );
}
