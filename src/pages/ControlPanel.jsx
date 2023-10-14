// import Footer from "../components/Footer/Footer";
import NavbarAdm from "../components/Navbar/NavbarAdm";
import Members from "../components/Membros/Membros";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import AddMember from "../components/Modals/AddMember";
import EditMember from "../components/Modals/EditMember";
import PanelNavbar from "../components/Navbar/PanelNavbar";
import axios from "axios";

export default function ControlPanel() {
  const [membros, setMembros] = useState(true);
  const [settings, setSettings] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [editMember, setEditMember] = useState([false, 0]);

  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      role: "",
      cpf: "",
    },
  ]);

  return (
    <>
      {addMember && (
        <AddMember
          members={members}
          setMembers={setMembers}
          setAddMember={setAddMember}
        />
      )}
      {editMember[0] && (
        <EditMember
          members={members}
          editMember={editMember}
          setMembers={setMembers}
          setEditMember={setEditMember}
        />
      )}
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
            members={members}
            setMembers={setMembers}
            addMember={addMember}
            setAddMember={setAddMember}
            editMember={editMember}
            setEditMember={setEditMember}
          />
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
}
