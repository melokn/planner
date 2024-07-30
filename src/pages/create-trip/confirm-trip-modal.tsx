import { User } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { CloseButton } from "../../components/close-button"

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event:FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip
}: ConfirmTripModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                <CloseButton onClick={closeConfirmTripModal}/>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil </span> 
                nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>
            </div>
            
            <form onSubmit={createTrip} className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5"/>
              <Input 
                type="text"
                name="name"
                placeholder="Para onde você vai?"
              />
              </div>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5"/>
              <Input 
                type="email"
                name="email"
                placeholder="Seu email pessoal"
              />
              </div>
              
              <Button variant="primary" size="full" type="submit">
                Confirmar criação de viagem
              </Button>
            </form>
          </div>
        </div>
    )
}