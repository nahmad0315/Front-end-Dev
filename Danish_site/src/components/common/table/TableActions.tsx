import { Eye, Pencil, Trash } from "lucide-react";

interface TableActionsProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TableActions({ onView, onEdit, onDelete }: TableActionsProps) {
  return (
    <div className="flex space-x-2">
      <button onClick={onView} className="text-blue-500 hover:text-blue-700">
        <Eye size={16} />
      </button>
      <button onClick={onEdit} className="text-yellow-500 hover:text-yellow-700">
        <Pencil size={16} />
      </button>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        <Trash size={16} />
      </button>
    </div>
  );
}
