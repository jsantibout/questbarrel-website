import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      {/* Navigation */}
      

      {/* Main content on parchment - paper effect only covers this area */}
      <div className="relative flex-1 flex flex-col min-h-0">
        <div className="paper-texture" />
        <main className="flex-1 min-h-0 relative z-0">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            // src="/images/NimbusQuill_F4E4BC_background.png"
            src="/images/NimbusQuill_transparent.png"
            alt="Nimbus Quill"
            width={800}
            height={600}
            className="mx-auto mb-8"
            priority
          />
          <div className="inline-block mb-6 px-4 py-2 parchment-dark rounded border-2 border-border">
            <span className="text-primary font-medium">Voice-Powered D&D Tracking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary drop-shadow-sm">
            Track Your Sessions<br />
            <span className="text-accent-dark">Hands-Free</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            Stop breaking immersion to take notes. Nimbus Quill uses AI-powered voice recognition
            to automatically detect and log combat, damage, spells, and more from natural speech.
          </p>
          <a
            href="#how-it-works"
            className="inline-block border-2 border-primary hover:bg-primary hover:text-surface text-primary px-8 py-4 rounded text-lg font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary drop-shadow-sm">Everything You Need at the Table</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Designed by D&D players, for D&D players. Every feature built to enhance your game, not interrupt it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            <FeatureCard
              icon="🎤"
              title="Voice Recognition"
              description="Transcribes your speech in real-time."
            />
            <FeatureCard
              icon="⚔️"
              title="Combat Tracking"
              description="Automatic initiative order, enemy HP tracking, damage application, and condition management."
            />
            <FeatureCard
              icon="🎯"
              title="Event Detection"
              description="Event types recognized automatically: attacks, skill checks, death saves, and more."
            />
            <FeatureCard
              icon="📜"
              title="Session Logs"
              description="Every session saved with full transcripts and activity logs. Never forget what happened last week."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary drop-shadow-sm">How It Works</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Three simple steps to hands-free session tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number="1"
              title="Start Recording"
              description="Hit record when your session begins. Nimbus Quill listens to everyone at the table."
            />
            <StepCard
              number="2"
              title="Play Naturally"
              description="Speak normally. Say 'roll initiative' or 'the goblin takes 15 damage' as you play."
            />
            <StepCard
              number="3"
              title="Watch It Track"
              description="Combat state updates automatically. Initiative, HP, conditions - all managed for you."
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="phrases" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary drop-shadow-sm">Speaks Your Language</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Nimbus Quill understands the way you actually talk at the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <PhraseExample phrase="Roll initiative" event="Combat begins, initiative tracker opens" />
            <PhraseExample phrase="Add 3 goblins with 20 HP" event="Enemies added to combat tracker" />
            {/* <PhraseExample phrase="I attack the orc with advantage" event="Attack logged with advantage" /> */}
            <PhraseExample phrase="The dragon takes 45 damage" event="HP updated, damage recorded" />
            {/* <PhraseExample phrase="I cast shield as a reaction" event="Spell detected and logged" /> */}
            <PhraseExample phrase="That's a natural 20!" event="Critical hit recorded" />
            <PhraseExample phrase="The fighter is unconscious" event="Condition applied" />
            <PhraseExample phrase="End combat" event="Combat tracker closes, summary saved" />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary drop-shadow-sm">Coming Soon</h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Nimbus Quill is currently in development. Stay tuned for release announcements.
          </p>
          {/* <div className="inline-block parchment paper-edge ornate-border rounded-lg px-8 py-6">
            <p className="text-lg text-foreground">
              Built with <span className="text-primary">♥</span> for tabletop adventurers everywhere.
            </p>
          </div> */}
        </div>
      </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-border bg-background-alt">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪶</span>
            <span className="text-lg font-semibold text-primary font-heading">Nimbus Quill</span>
          </div>
          <p className="text-muted text-sm">
            Built by QuestBarrel
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="parchment paper-edge ornate-border rounded-lg p-6 hover:border-primary transition-colors w-full max-w-sm text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-primary text-surface text-2xl font-bold flex items-center justify-center mx-auto mb-6 border-4 border-accent shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}

function PhraseExample({ phrase, event }: { phrase: string; event: string }) {
  return (
    <div className="parchment paper-edge ornate-border rounded-lg p-4 flex items-center gap-4">
      <div className="flex-1">
        <p className="font-medium text-foreground">&quot;{phrase}&quot;</p>
        <p className="text-sm text-accent-dark font-medium">→ {event}</p>
      </div>
    </div>
  );
}
