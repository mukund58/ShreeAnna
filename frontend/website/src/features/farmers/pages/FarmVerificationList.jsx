import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

import FarmVerificationStatus from "../components/FarmVerificationStatus";

import { farmVerifications } from "../data/farmVerifications";


function FarmVerificationList() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");


  const filteredFarms = useMemo(() => {
    return farmVerifications.filter((farm) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        farm.farmerName.toLowerCase().includes(searchText) ||
        farm.farmName.toLowerCase().includes(searchText) ||
        farm.surveyNumber.toLowerCase().includes(searchText) ||
        farm.id.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "all" ||
        farm.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);


  const pendingCount = farmVerifications.filter(
    (farm) => farm.status === "Pending Verification"
  ).length;

  const reviewCount = farmVerifications.filter(
    (farm) => farm.status === "Under Review"
  ).length;

  const verifiedCount = farmVerifications.filter(
    (farm) => farm.status === "Verified"
  ).length;

  const rejectedCount = farmVerifications.filter(
    (farm) => farm.status === "Rejected"
  ).length;


  const handleReset = () => {
    setSearch("");
    setStatus("all");
  };


  return (
    <div className="space-y-6">

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Farm Verification
        </h1>

        <p className="text-muted-foreground">
          Review and verify farms submitted by farmers.
        </p>
      </div>


      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <VerificationStat
          title="Pending Verification"
          value={pendingCount}
          icon={Clock3}
        />

        <VerificationStat
          title="Under Review"
          value={reviewCount}
          icon={Search}
        />

        <VerificationStat
          title="Verified"
          value={verifiedCount}
          icon={CheckCircle2}
        />

        <VerificationStat
          title="Rejected"
          value={rejectedCount}
          icon={XCircle}
        />

      </div>


      {/* Filters */}
      <Card>
        <CardContent className="p-4">

          <div className="flex flex-col gap-3 lg:flex-row">

            {/* Search */}
            <div className="relative flex-1">

              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search farmer, farm, survey number..."
                className="pl-9"
              />

            </div>


            {/* Status */}
            <Select
              value={status}
              onValueChange={setStatus}
            >
              <SelectTrigger className="w-full lg:w-52">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">
                  All Status
                </SelectItem>

                <SelectItem value="Pending Verification">
                  Pending Verification
                </SelectItem>

                <SelectItem value="Under Review">
                  Under Review
                </SelectItem>

                <SelectItem value="Verified">
                  Verified
                </SelectItem>

                <SelectItem value="Rejected">
                  Rejected
                </SelectItem>
              </SelectContent>
            </Select>


            {/* Reset */}
            <Button
              variant="outline"
              onClick={handleReset}
            >
              Reset
            </Button>

          </div>

        </CardContent>
      </Card>


      {/* Verification table */}
      <Card>
        <CardContent className="p-0">

          <Table>

            <TableHeader>
              <TableRow>

                <TableHead>Farm</TableHead>

                <TableHead>Farmer</TableHead>

                <TableHead>Location</TableHead>

                <TableHead>Survey Number</TableHead>

                <TableHead>Area</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Submitted</TableHead>

                <TableHead className="w-10" />

              </TableRow>
            </TableHeader>


            <TableBody>

              {filteredFarms.length > 0 ? (

                filteredFarms.map((farm) => (

                  <TableRow key={farm.id}>

                    {/* Farm */}
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {farm.farmName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {farm.id}
                        </p>
                      </div>
                    </TableCell>


                    {/* Farmer */}
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {farm.farmerName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {farm.farmerId}
                        </p>
                      </div>
                    </TableCell>


                    {/* Location */}
                    <TableCell>
                      <div>
                        <p>{farm.village}</p>

                        <p className="text-xs text-muted-foreground">
                          {farm.district}
                        </p>
                      </div>
                    </TableCell>


                    {/* Survey */}
                    <TableCell className="font-medium">
                      {farm.surveyNumber}
                    </TableCell>


                    {/* Area */}
                    <TableCell>
                      {farm.area} acres
                    </TableCell>


                    {/* Status */}
                    <TableCell>
                      <FarmVerificationStatus
                        status={farm.status}
                      />
                    </TableCell>


                    {/* Submitted */}
                    <TableCell className="text-muted-foreground">
                      {farm.submittedAt}
                    </TableCell>


                    {/* Actions */}
                    <TableCell>

                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>

                          <Button
                            variant="ghost"
                            size="icon"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>

                        </DropdownMenuTrigger>


                        <DropdownMenuContent align="end">

                          <DropdownMenuItem
                            onClick={() =>
                              navigate(
                                `/farm-verification/${farm.id}`
                              )
                            }
                          >
                            Review Farm
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            View Farmer
                          </DropdownMenuItem>

                        </DropdownMenuContent>

                      </DropdownMenu>

                    </TableCell>

                  </TableRow>

                ))

              ) : (

                <TableRow>

                  <TableCell
                    colSpan={8}
                    className="h-32 text-center"
                  >
                    <div className="flex flex-col items-center justify-center">

                      <ShieldCheck className="mb-2 h-8 w-8 text-muted-foreground" />

                      <p className="font-medium">
                        No farms found
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Try changing your search or filters.
                      </p>

                    </div>
                  </TableCell>

                </TableRow>

              )}

            </TableBody>

          </Table>

        </CardContent>
      </Card>

    </div>
  );
}


/* Small reusable statistic card */
function VerificationStat({
  title,
  value,
  icon: Icon,
}) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold">
            {value}
          </p>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <Icon className="h-5 w-5" />
        </div>

      </CardContent>
    </Card>
  );
}


export default FarmVerificationList;