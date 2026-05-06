import { Layout, Home, PenTool, Lightbulb, Compass, Users } from 'lucide-react';

const expertise = [
  { icon: <Layout size={20} />, label: 'UIUX Designer' },
  { icon: <Compass size={20} />, label: 'Design System Lead' },
  { icon: <Home size={20} />, label: 'Space & Interior Designer' },
  { icon: <Users size={20} />, label: 'Design Thinking Workshops' },
  { icon: <PenTool size={20} />, label: 'Visual Designer' },
  { icon: <Lightbulb size={20} />, label: 'Architect' },
];

const Item = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 px-6 shrink-0">
    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
      {icon}
    </span>
    <span className="text-base font-semibold text-foreground whitespace-nowrap">{label}</span>
    <span className="ml-6 text-primary/40 text-xl select-none">✦</span>
  </div>
);

export default function ExpertiseBanner() {
  const doubled = [...expertise, ...expertise];

  return (
    <div className="w-full overflow-hidden border-y border-border bg-card py-4 select-none">
      <div className="flex animate-marquee">
        {doubled.map((item, i) => (
          <Item key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}
