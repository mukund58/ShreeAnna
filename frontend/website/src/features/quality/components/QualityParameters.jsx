import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function QualityParameters({ values, onChange }) {
  const updateValue = (field, value) => {
    onChange({
      ...values,
      [field]: value,
    });
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="moisture">Moisture (%)</Label>

        <Input
          id="moisture"
          type="number"
          step="0.1"
          value={values.moisture}
          onChange={(e) =>
            updateValue("moisture", e.target.value)
          }
          placeholder="e.g. 10.5"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="foreignMatter">
          Foreign Matter (%)
        </Label>

        <Input
          id="foreignMatter"
          type="number"
          step="0.1"
          value={values.foreignMatter}
          onChange={(e) =>
            updateValue("foreignMatter", e.target.value)
          }
          placeholder="e.g. 1.0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="damagedGrains">
          Damaged / Discolored Grains (%)
        </Label>

        <Input
          id="damagedGrains"
          type="number"
          step="0.1"
          value={values.damagedGrains}
          onChange={(e) =>
            updateValue("damagedGrains", e.target.value)
          }
          placeholder="e.g. 2.0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="immatureGrains">
          Immature Grains (%)
        </Label>

        <Input
          id="immatureGrains"
          type="number"
          step="0.1"
          value={values.immatureGrains}
          onChange={(e) =>
            updateValue("immatureGrains", e.target.value)
          }
          placeholder="e.g. 1.5"
        />
      </div>

      <div className="space-y-2">
        <Label>Insect Damage / Infestation</Label>

        <Select
          value={values.insectDamage}
          onValueChange={(value) =>
            updateValue("insectDamage", value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select condition" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="None">None</SelectItem>
            <SelectItem value="Minor">Minor</SelectItem>
            <SelectItem value="Significant">
              Significant
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Grade</Label>

        <Select
          value={values.grade}
          onValueChange={(value) =>
            updateValue("grade", value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select grade" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Grade A">Grade A</SelectItem>
            <SelectItem value="Grade B">Grade B</SelectItem>
            <SelectItem value="Grade C">Grade C</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default QualityParameters;