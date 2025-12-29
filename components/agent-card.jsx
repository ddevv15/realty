import { Card } from "./ui/card"

export function AgentCard({ agent }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-muted mb-4">
          <img src={agent.image || "/images/placeholder.svg"} alt={agent.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{agent.name}</h3>
        <p className="text-sm text-accent font-semibold mb-3">{agent.specialty}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{agent.bio}</p>

        <div className="w-full space-y-2 text-sm">
          <a
            href={`mailto:${agent.email}`}
            className="block text-primary hover:text-primary/80 transition-colors truncate"
          >
            {agent.email}
          </a>
          <a href={`tel:${agent.phone}`} className="block text-primary hover:text-primary/80 transition-colors">
            {agent.phone}
          </a>
        </div>
      </div>
    </Card>
  )
}
