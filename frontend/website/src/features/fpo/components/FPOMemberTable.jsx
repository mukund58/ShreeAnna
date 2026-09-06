import {
  Eye,
  Mail,
  Phone,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function FPOMemberTable({ members }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                Member
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Role
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Department
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Contact
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Assigned Area
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Status
              </th>

              <th className="px-4 py-3 text-right font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b last:border-0 hover:bg-muted/20"
              >
                <td className="px-4 py-4">
                  <div className="font-medium">
                    {member.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {member.id}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {member.role}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs">
                    {member.department}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Phone size={13} />
                    {member.phone}
                  </div>

                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Mail size={13} />
                    {member.email}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {member.assignedArea}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    {member.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <button
                    onClick={() =>
                      navigate(
                        `/fpo/members/${member.id}`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-muted"
                  >
                    <Eye size={15} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FPOMemberTable;