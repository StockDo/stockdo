// import Footer from "../components/Footer/Footer";
import NavbarAdm from "../components/Navbar/NavbarAdm";
import Members from "../components/Membros/Membros";
import { useState } from "react";
import { useNavigate } from "react-router";
import AddMember from "../components/Modals/AddMember";
import EditMember from "../components/Modals/EditMember";
import PanelNavbar from "../components/Navbar/PanelNavbar";

export default function ControlPanel() {
  const [membros, setMembros] = useState(true);
  const [settings, setSettings] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [editMember, setEditMember] = useState([false, 1]);
  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Renan Almeida",
      role: "Administrador",
      cpf: "404.580.638-40",
    },
    {
      id: 1,
      name: "Davi Pimentel",
      role: "Administrador",
      cpf: "404.580.638-40",
    },
    {
      id: 2,
      name: "Nícolas Lopes",
      role: "Administrador",
      cpf: "404.580.638-40",
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
