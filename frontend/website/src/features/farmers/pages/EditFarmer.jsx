import { useState, useRef } from "react";

import {
  ArrowLeft,
  Save,
  Camera,
  Trash2,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { farmers } from "../data/farmers";

function EditFarmer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const farmer = farmers.find(
    (item) => item.id === id
  );

  if (!farmer) {
    return (
      <div className="space-y-4">

        <h1 className="text-2xl font-bold">
          Farmer not found
        </h1>

        <Button onClick={() => navigate("/farmers")}>
          Back to Farmers
        </Button>

      </div>
    );
  }

  return (
    <EditFarmerForm
      farmer={farmer}
      onCancel={() => navigate(`/farmers/${id}`)}
      onSave={() => navigate(`/farmers/${id}`)}
    />
  );
}


function EditFarmerForm({
  farmer,
  onCancel,
  onSave,
}) {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: farmer.name,
    phone: farmer.phone,
    email: farmer.email,
    photoUrl: farmer.photoUrl || "",
    preferredLanguage: farmer.preferredLanguage || "Gujarati (ગુજરાતી)",
    district: farmer.district,
    taluka: farmer.taluka,
    village: farmer.village,
    address: farmer.address,
    status: farmer.status,
  });

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateField("photoUrl", imageUrl);
    }
  };

  const getInitials = (name) => {
    if (!name) return "FP";
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Updated farmer:", {
      id: farmer.id,
      ...form,
    });

    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onCancel}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Edit Farmer
            </h1>

            <p className="text-sm text-muted-foreground">
              Update farmer information.
            </p>
          </div>

        </div>


        <div className="flex gap-2">

          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>

        </div>

      </div>


      {/* Profile Photo */}
      <Card className="border-slate-200/80 shadow-xs">

        <CardHeader>
          <CardTitle>
            Profile Picture
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col sm:flex-row items-center gap-6">

            <Avatar className="h-24 w-24 border-2 border-slate-200 shadow-xs">
              <AvatarImage src={form.photoUrl} alt={form.name} />
              <AvatarFallback className="text-xl font-bold bg-slate-100 text-slate-700">
                {getInitials(form.name)}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2 text-center sm:text-left">

              <div className="flex flex-wrap justify-center sm:justify-start gap-2">

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Upload Photo
                </Button>

                {form.photoUrl && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => updateField("photoUrl", "")}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                )}

              </div>

              <p className="text-xs text-muted-foreground">
                Allowed formats: JPG, PNG, WEBP. Max file size: 2MB.
              </p>

            </div>

          </div>
        </CardContent>

      </Card>


      {/* Personal information */}
      <Card className="border-slate-200/80 shadow-xs">

        <CardHeader>
          <CardTitle>
            Personal Information
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">

            <Field
              label="Farmer Name"
              value={form.name}
              onChange={(value) =>
                updateField("name", value)
              }
            />

            <Field
              label="Phone Number"
              value={form.phone}
              onChange={(value) =>
                updateField("phone", value)
              }
            />

            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(value) =>
                updateField("email", value)
              }
            />

            <div className="space-y-2">

              <Label>
                Preferred Language
              </Label>

              <Select
                value={form.preferredLanguage}
                onValueChange={(value) =>
                  updateField("preferredLanguage", value)
                }
              >

                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="Gujarati (ગુજરાતી)">
                    Gujarati (ગુજરાતી)
                  </SelectItem>

                  <SelectItem value="Hindi (हिंदी)">
                    Hindi (हिंदी)
                  </SelectItem>

                  <SelectItem value="English">
                    English
                  </SelectItem>

                  <SelectItem value="Marathi (मરાઠી)">
                    Marathi (मરાઠી)
                  </SelectItem>

                  <SelectItem value="Punjabi (ਪੰਜਾਬੀ)">
                    Punjabi (ਪੰਜਾਬੀ)
                  </SelectItem>

                  <SelectItem value="Tamil (தமிழ்)">
                    Tamil (தமிழ்)
                  </SelectItem>

                  <SelectItem value="Telugu (తెలుగు)">
                    Telugu (తెలుగు)
                  </SelectItem>

                  <SelectItem value="Kannada (કન્નડ)">
                    Kannada (કન્નડ)
                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

            <div className="space-y-2">

              <Label>
                Status
              </Label>

              <Select
                value={form.status}
                onValueChange={(value) =>
                  updateField("status", value)
                }
              >

                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="Active">
                    Active
                  </SelectItem>

                  <SelectItem value="Pending">
                    Pending
                  </SelectItem>

                  <SelectItem value="Inactive">
                    Inactive
                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

          </div>
        </CardContent>

      </Card>


      {/* Location */}
      <Card className="border-slate-200/80 shadow-xs">

        <CardHeader>
          <CardTitle>
            Location
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">

            <Field
              label="District"
              value={form.district}
              onChange={(value) =>
                updateField("district", value)
              }
            />

            <Field
              label="Taluka"
              value={form.taluka}
              onChange={(value) =>
                updateField("taluka", value)
              }
            />

            <Field
              label="Village"
              value={form.village}
              onChange={(value) =>
                updateField("village", value)
              }
            />

          </div>

          <div className="mt-6">
            <Field
              label="Address"
              value={form.address}
              onChange={(value) =>
                updateField("address", value)
              }
            />
          </div>

        </CardContent>

      </Card>


      {/* Farmer ID */}
      <Card className="border-slate-200/80 shadow-xs">

        <CardHeader>
          <CardTitle>
            Account Information
          </CardTitle>
        </CardHeader>

        <CardContent>

          <div className="max-w-md space-y-2">

            <Label>
              Farmer ID
            </Label>

            <Input
              value={farmer.id}
              disabled
            />

            <p className="text-xs text-muted-foreground">
              Farmer ID cannot be changed.
            </p>

          </div>

        </CardContent>

      </Card>

    </form>
  );
}


function Field({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="space-y-2">

      <Label>
        {label}
      </Label>

      <Input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />

    </div>
  );
}

export default EditFarmer;