import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput:() => void

}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <Input 
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <Input 
          type="text"
          placeholder="Quando?"
          inputSize="small"
          disabled={isGuestsInputOpen}
        />

      </div>
      <div className="w-px h-6 zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button variant="secondary" size="default" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        
        <Button variant="primary" size="default" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
