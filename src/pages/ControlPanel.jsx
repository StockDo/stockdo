// import Footer from "../components/Footer/Footer";
import NavbarAdm from "../components/Navbar/NavbarAdm";
import Members from "../components/Membros/Membros";
import { useState } from "react";
import AddMember from "../components/Modals/AddMember";
import EditMember from "../components/Modals/EditMember";
import PanelNavbar from "../components/Navbar/PanelNavbar";
import Map from "../components/Maps/Map";
import Maps from "../components/Maps/Maps";

export default function ControlPanel() {
  const [membros, setMembros] = useState(true);
  const [maps, setMaps] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [editMember, setEditMember] = useState(false);
  const [map, setMap] = useState(false);

  return (
    <>
      {addMember && <AddMember setAddMember={setAddMember} />}
      {editMember && <EditMember setEditMember={setEditMember} />}
      <NavbarAdm />
      <main className="flex">
        <PanelNavbar
          setMembros={setMembros}
          membros={membros}
          setMaps={setMaps}
          maps={maps}
          setMap={setMap}
          map={map}
        />
        {membros && (
          <Members
            setAddMember={setAddMember}
            setEditMember={setEditMember}
            addMember={addMember}
            editMember={editMember}
          />
        )}
        {maps && <Maps setMap={setMap} setMaps={setMaps} />}
        {map && <Map />}
      </main>
      {/* <Footer /> */}
    </>
  );
}
