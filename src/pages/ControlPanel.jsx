// import Footer from "../components/Footer/Footer";
import NavbarAdm from "../components/Navbar/NavbarAdm";
import Members from "../components/Membros/Membros";
import { useState } from "react";
import AddMember from "../components/Modals/AddMember";
import EditMember from "../components/Modals/EditMember";
import PanelNavbar from "../components/Navbar/PanelNavbar";

export default function ControlPanel() {
  const [membros, setMembros] = useState(true);
  const [settings, setSettings] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [editMember, setEditMember] = useState(false);

  return (
    <>
      {addMember && <AddMember setAddMember={setAddMember} />}
      {editMember && <EditMember setEditMember={setEditMember} />}
      <NavbarAdm />
      <main className="flex">
        <PanelNavbar
          membros={membros}
          setMembros={setMembros}
          settings={settings}
          setSettings={setSettings}
        />
        {membros && (
          <Members
            setAddMember={setAddMember}
            setEditMember={setEditMember}
            addMember={addMember}
            editMember={editMember}
          />
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
}
