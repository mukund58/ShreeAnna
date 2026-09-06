import { useMemo, useState } from "react";

import FPOStats from "../components/FPOStats";
import FPOFilters from "../components/FPOFilters";
import FPOMemberTable from "../components/FPOMemberTable";

import {
  fpoMembers,
} from "../data/fpoMembers";

function FPOManagement() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [department, setDepartment] =
    useState("All");

  const filteredMembers = useMemo(() => {
    const query = search.toLowerCase();

    return fpoMembers.filter((member) => {
      const matchesSearch =
        member.name
          .toLowerCase()
          .includes(query) ||
        member.role
          .toLowerCase()
          .includes(query) ||
        member.department
          .toLowerCase()
          .includes(query);

      const matchesRole =
        role === "All" ||
        member.role === role;

      const matchesDepartment =
        department === "All" ||
        member.department === department;

      return (
        matchesSearch &&
        matchesRole &&
        matchesDepartment
      );
    });
  }, [search, role, department]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          FPO Management
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage FPO members, operational roles and responsibilities.
        </p>
      </div>

      <FPOStats />

      <FPOFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        department={department}
        setDepartment={setDepartment}
      />

      <FPOMemberTable
        members={filteredMembers}
      />
    </div>
  );
}

export default FPOManagement;