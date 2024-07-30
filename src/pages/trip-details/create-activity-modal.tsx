import { Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { CloseButton } from "../../components/close-button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <CloseButton onClick={closeCreateActivityModal}/>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem ver as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              className="placeholder-zinc-400 bg-transparent text-lg outline-none flex-1"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <Input 
                type="datetime-local"
                name="occurs-at"
                placeholder="Data e horário da atividade"
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
