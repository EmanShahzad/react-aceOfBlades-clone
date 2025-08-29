import PanelComponent from "../components/admin/PanelComponent";
import TitleSection from "../components/TitleComponent/TitleSection";

function AdminPanel() {
  return (
    <>
      <TitleSection title="Inventory of Blades" />
      <PanelComponent />
    </>
  );
}

export default AdminPanel;
