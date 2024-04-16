import EditorProvider from "@/providers/editor/editor-provider";
import FunnelEditorNavigation from "./_components/funnel-editor-navigation";
import FunnelEditorSidebar from "./_components/funnel-editor-sidebar";
import FunnelEditor from "./_components/funnel-editor";

export default function Home() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider>
        <FunnelEditorNavigation funnelId="alpha" subaccountId="beta" />
        <div className="h-full flex justify-center">
          <FunnelEditor funnelPageId="alpha" />
        </div>
        <FunnelEditorSidebar subaccountId="alpha" />
      </EditorProvider>
    </div>
  );
}
