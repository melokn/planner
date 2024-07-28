import {
    MapPin,
    Calendar,
    ArrowRight,
    UserRoundPlus,
    Settings2,
    X,
    AtSign,
    Plus,
    User
  } from "lucide-react";
  import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
  
  export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [emailsToInvite, setEmailsToInvite] = useState([
      "gabriel.veloso5@gmail.com"
    ])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  
    function openGuestsInput() {
      setIsGuestsInputOpen(true);
    }
    function closeGuestsInput() {
      setIsGuestsInputOpen(false);
    }
    function openGuestsModal() {
      setIsGuestsModalOpen(true);
    }
    function closeGuestsModal() {
      setIsGuestsModalOpen(false);
    }
    function openConfirmTripModal(){
      setIsConfirmTripModalOpen(true)
    }
    function closeConfirmTripModal(){
      setIsConfirmTripModalOpen(false)
    }
    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
      event.preventDefault() 
      const data = new FormData(event.currentTarget)
      const email = data.get('email')?.toString()
  
      if(!email){
        return
      }
      
      if(emailsToInvite.includes(email)){
        return
        
      }
      setEmailsToInvite([
        ...emailsToInvite,
        email 
      ])
  
      event.currentTarget.reset()
    }
  
    function removeEmailFromInvites(emailToRemove: string){
      const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
      setEmailsToInvite(newEmailList)
  
    }
    function createTrip(){
        navigate('/trips/123')
    }
    return (
      <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeje a sua próxima viagem
            </p>
          </div>
  
          <div className="space-y-4">
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                  type="text"
                  className="placeholder-zinc-400 bg-transparent text-lg outline-none flex-1"
                  placeholder="Para onde você vai?"
                  disabled={isGuestsInputOpen}
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  type="text"
                  className="placeholder-zinc-400 bg-transparent text-lg outline-none w-40"
                  placeholder="Quando?"
                  disabled={isGuestsInputOpen}
                />
              </div>
  
              <div className="w-px h-6 zinc-800"></div>
  
              {isGuestsInputOpen ? (
                <button
                  onClick={closeGuestsInput}
                  className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700"
                >
                  Alterar local/data
                  <Settings2 className="size-5" />
                </button>
              ) : (
                <button
                  onClick={openGuestsInput}
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400"
                >
                  Continuar
                  <ArrowRight className="size-5" />
                </button>
              )}
            </div>
  
            {isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <button
                  type="button"
                  onClick={openGuestsModal}
                  className="flex items-center gap-2 flex-1"
                >
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1 text-left">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                  ) : (
                    <span className="text-zinc-400 text-lg flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                  )}
                </button>
  
                <div className="w-px h-6 zinc-800"></div>
  
                <button onClick={openConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                  Confirmar Viagem
                  <ArrowRight className="size-5" />
                </button>
              </div>
            )}
          </div>
          <p className="text-small text-zinc-500">
            Ao planejar a sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a href="#" className="text-zinc-300 underline">
              termos de uso
            </a>{" "}
            e{" "}
            <a href="#" className="text-zinc-300 underline">
              políticas de privacidade
            </a>
          </p>
        </div>
        {isGuestsModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
                  <button onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400 " />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Os convidados irão receber e-mails para confirmar a participação
                  na viagem.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {emailsToInvite.map(email =>{
                  return (
                    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2 ">
                  <span className="text-zinc-300">{email}</span>
                  <button type="button" onClick={() => removeEmailFromInvites(email)}>
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>
                  ) 
                })}
              </div>
              <div className="w-full h-px bg-zinc-800"/>
              
              <form className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2" onSubmit={addNewEmailToInvite}>
                <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5"/>
                <input
                  type="email"
                  name="email"
                  className="placeholder-zinc-400 bg-transparent text-lg outline-none flex-1"
                  placeholder="Digite o e-mail do convidado"
                />
                </div>
                <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                  Convidar
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        )}
  
        {isConfirmTripModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                <button onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400 " />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil </span> 
                nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>
            </div>
            
            <form className="space-y-3" onSubmit={addNewEmailToInvite}>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5"/>
              <input
                type="text"
                name="emanameil"
                className="placeholder-zinc-400 bg-transparent text-lg outline-none flex-1"
                placeholder="Seu nome completo"
              />
              </div>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5"/>
              <input
                type="email"
                name="email"
                className="placeholder-zinc-400 bg-transparent text-lg outline-none flex-1"
                placeholder="Seu email pessoal"
              />
              </div>
              <button onClick={createTrip} type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 flex items-center gap-2 hover:bg-lime-400">
                Confirmar criação de viagem
              </button>
            </form>
          </div>
        </div>
        )}
  
      </div>
    );
  }
  