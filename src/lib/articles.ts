export type Article = {
  slug: string;
  title: string;
  category: string;
  read: number;
  description: string;
  intro: string;
  sections: { heading: string; body: string; followUp?: string }[];
  sources: { title: string; url: string }[];
};

const nhs = {
  title: "Maintaining healthy relationships and mental wellbeing — NHS",
  url: "https://www.nhs.uk/every-mind-matters/lifes-challenges/maintaining-healthy-relationships-and-mental-wellbeing/",
};

const respect = {
  title: "How consent works — love is respect",
  url: "https://www.loveisrespect.org/resources/how-consent-works/",
};

const apa = {
  title: "Romantic relationships — APA Dictionary of Psychology",
  url: "https://dictionary.apa.org/romantic-love",
};

const attachment = {
  title: "How close relationships help us thrive — APA Monitor on Psychology",
  url: "https://www.apa.org/monitor/2019/12/relationships-thrive.html",
};

const articles: Article[] = [
  {
    slug: "what-is-love",
    title: "What Is Love, Really?",
    category: "Understanding love",
    read: 6,
    description:
      "Love can mean affection, commitment, desire, friendship, family and everyday care.",
    intro:
      "People use love to mean a feeling, a commitment, or the care built into everyday life. The word covers a lot. On its own, it cannot tell you whether a relationship is kind or right for you.",
    sections: [
      {
        heading: "A feeling, and a way of relating",
        body: "Warmth and longing can be part of love. So can the less dramatic things: keeping a promise, listening when something is difficult, and respecting a no. How people treat each other over time tells you more than intensity alone.",
        followUp:
          "Feelings shift with stress, health, distance and time. That does not make them false. It does mean that a single intense moment is a poor measure of how safe or steady a relationship is. Look at patterns, including whether care goes both ways and whether you can speak honestly without fear.",
      },
      {
        heading: "Love has more than one shape",
        body: "Romantic love is only one form. Friendship, family ties, community and compassion can all offer belonging and meaning. A life without a romantic relationship is not a life without love.",
        followUp:
          "People also differ in how they express and experience closeness. Some value frequent contact; others feel connected while spending more time apart. It helps to ask what care looks like to the people involved instead of treating one style as the standard.",
      },
      {
        heading: "A useful question",
        body: "Rather than measuring how intense the feeling is, notice what happens between you. Can you disagree? Do you feel able to say no? Do you both make an effort after a hurt? Those details are often more useful than finding the perfect definition.",
        followUp:
          "You do not need to answer every question at once. If something feels wrong, name the specific moment and consider what would help: a conversation, a boundary, time to think, or support from someone you trust. Love can be meaningful while still needing limits.",
      },
    ],
    sources: [apa, nhs],
  },

  {
    slug: "attraction-infatuation-love",
    title: "Attraction, Infatuation and Love",
    category: "Understanding love",
    read: 7,
    description:
      "Strong attraction can be meaningful without telling you yet what a relationship will become.",
    intro:
      "A new crush can occupy your thoughts and make ordinary moments feel charged. That intensity is real. It is also different from knowing someone well or building a relationship together.",
    sections: [
      {
        heading: "Attraction draws attention",
        body: "Attraction can be physical, emotional, intellectual or a combination. It may spark curiosity and a wish to spend time together, but attraction alone cannot show whether your values, needs or expectations fit.",
        followUp:
          "You might enjoy someone's company and still discover that you want different things. That is not a failure of attraction. It is information you could only get by spending time together and being honest about what matters to you.",
      },
      {
        heading: "Infatuation fills in the blanks",
        body: "When you know little about someone, imagination can supply the missing pieces. You may focus on their best moments and picture what a future could be. That is common; it becomes more grounded as you learn how they act in ordinary situations.",
        followUp:
          "Try separating what you have observed from what you hope is true. For example, “They check in after we make plans” is an observation; “They will always know what I need” is a prediction. Both hopes and excitement are allowed, but they are not the same as knowing.",
      },
      {
        heading: "Love grows through knowledge",
        body: "There is no timetable for knowing someone. Pay attention to how they act when plans change, when you disagree, or when one of you needs space. You can care about a new connection without deciding what to call it yet.",
        followUp:
          "A slower pace can make room for curiosity instead of pressure. You can ask what the other person wants, share your own hopes, and let the answer develop over time. A label is useful when it helps both people understand their agreement, not when it is used to force certainty.",
      },
    ],
    sources: [apa, nhs],
  },

  {
    slug: "vulnerability-in-love",
    title: "Why Feeling Loved Can Make Us Feel Vulnerable",
    category: "Feelings & insecurity",
    read: 5,
    description: "Closeness can feel comforting and exposing at the same time.",
    intro:
      "Being cared for can bring relief. It can also raise the stakes: now there is something meaningful to lose, and someone whose opinion matters to you.",
    sections: [
      {
        heading: "Closeness involves uncertainty",
        body: "Letting someone know you takes a degree of trust. You cannot fully control how another person responds, so tenderness may sit alongside fear or self-consciousness.",
        followUp:
          "That nervousness does not automatically mean the connection is unsafe. It can come from the ordinary risk of being seen, or from past experiences that make trust harder. Notice how the other person responds when you share something small; respect and patience matter more than a promise that you will never feel anxious.",
      },
      {
        heading: "Notice what the fear is asking for",
        body: "Try naming the concern plainly: Are you afraid of being judged, abandoned, or misunderstood? A specific fear is easier to talk about than a general sense that something is wrong.",
        followUp:
          "Then consider what is within your control. You might ask for clarification, take a pause, or decide that a subject is private for now. A partner can listen and offer reassurance, but neither person can remove all uncertainty from a relationship.",
      },
      {
        heading: "Move at a pace that feels mutual",
        body: "Vulnerability does not require sharing everything at once. Small, honest conversations can build trust. A caring person can respect a slower pace, and you can keep relationships and interests beyond one connection.",
        followUp:
          "If someone pushes past a boundary or uses private information to shame or threaten you, take that seriously. You are allowed to stop a conversation and seek outside support. Trust is built through repeated choices, not owed because one person has disclosed something personal.",
      },
    ],
    sources: [nhs, attachment],
  },

  {
    slug: "can-you-love-too-much",
    title: "Can You Love Someone Too Much?",
    category: "Feelings & insecurity",
    read: 6,
    description:
      "Strong feelings are not automatically a problem. Their effect on your life and choices is worth noticing.",
    intro:
      "People sometimes worry that the size of their feelings is itself a flaw. Strong love, longing or grief is not automatically unhealthy. What matters is how the relationship affects each person's safety, freedom and wellbeing.",
    sections: [
      {
        heading: "Intensity is not a diagnosis",
        body: "There is no threshold that makes a feeling unhealthy just because it is intense. Uncertainty, distance and change can make emotions louder. What matters is how you act and how the situation is affecting your life.",
        followUp:
          "Try not to use a label such as “too much” to punish yourself for caring. Instead, look for concrete signs of strain: are you neglecting sleep, responsibilities or friendships, or finding it hard to respect another person's choices? Those are useful reasons to pause and seek support, regardless of what you call the feeling.",
      },
      {
        heading: "Look at the effects",
        body: "Are you sleeping, working or studying, seeing friends, and making ordinary choices? Can each person say no? If these parts of life are shrinking, take that seriously.",
        followUp:
          "A simple check-in can make the pattern clearer. Think about what has changed over the past few weeks and whether the change feels chosen or driven by fear. You do not need to wait until a crisis to talk with a trusted person or professional.",
      },
      {
        heading: "Care can include space",
        body: "A relationship can matter deeply without becoming the only source of comfort or identity. Reconnecting with routines and trusted people is not a betrayal of love. If distress is persistent or overwhelming, a qualified professional can help you think it through.",
        followUp:
          "Making room for your own life can benefit both people. Time apart is not a test or a punishment; it is part of having separate needs and responsibilities. If either person feels pressured to give up friendships, privacy or independence, consider what boundary would restore a sense of choice.",
      },
    ],
    sources: [nhs, attachment],
  },

  {
    slug: "unrequited-love",
    title: "When You Love Someone Who Does Not Love You Back",
    category: "Unrequited love",
    read: 7,
    description:
      "One-sided love can hurt deeply, and the other person's answer still deserves respect.",
    intro:
      "Caring for someone who does not feel the same can bring hope, grief and embarrassment all at once. Your feelings are real; they do not create an obligation for the other person to return them.",
    sections: [
      {
        heading: "Let the answer be an answer",
        body: "A no, a lack of interest, or a request for distance should be respected. Repeated messages, pressure or grand gestures do not make mutuality more likely; they can make the other person feel unsafe.",
        followUp:
          "If the answer was unclear, one respectful request for clarity may be reasonable. After that, let the other person decide whether to respond. Do not use friends, new accounts or surprise visits to get around a boundary. Their choice deserves respect even while you are hurting.",
      },
      {
        heading: "Grieve what you hoped for",
        body: "You may be mourning a relationship that never began as well as the person. Give yourself room to feel disappointed without turning the rejection into a verdict on your worth.",
        followUp:
          "It can help to tell a friend what you are grieving: the person, the future you pictured, or the feeling of being chosen. Those losses can overlap. You do not have to convince yourself the connection meant nothing in order to accept that it was not mutual.",
      },
      {
        heading: "Make space for your own life",
        body: "Taking a break from reminders can help if contact keeps reopening the hurt. Talk with friends and return to routines that feel like yours. Missing the person again later does not mean you are back at the start.",
        followUp:
          "There is no single correct timeline for feeling better. Progress may look like having a more settled afternoon, then having a hard evening again. If the pain is making everyday life difficult for a sustained period, consider talking with a health professional.",
      },
    ],
    sources: [nhs, respect],
  },

  {
    slug: "rejection-feels-personal",
    title: "Why Rejection Can Feel So Personal",
    category: "Unrequited love",
    read: 5,
    description:
      "One person’s no can stir up old doubts, but it cannot tell you what you’re worth.",
    intro:
      "Rejection can make the mind reach for a big explanation: “I’m not lovable.” But one person’s choice tells you about this connection, not your worth or every relationship you might have.",
    sections: [
      {
        heading: "The mind wants an explanation",
        body: "Uncertainty is uncomfortable, so people may replay conversations or look for the exact moment things changed. Reflection can help, but repeated analysis cannot always produce a satisfying answer.",
        followUp:
          "When you catch yourself rereading a chat, ask what you know for sure and what you are guessing. A delayed reply can have many explanations. If you need a response by a certain time, say so directly; otherwise, try stepping away from the phone and returning to something you had planned.",
      },
      {
        heading: "A no is about a relationship choice",
        body: "People say no for all kinds of reasons: attraction, timing, compatibility or simply because they do not want the same thing. You may never know which. Their answer does not predict what every future relationship will be like.",
        followUp:
          "Wanting a reason is understandable, but a detailed explanation is not always available or owed. You can accept the answer without agreeing with it or deciding that it describes your character. Give yourself time before trying to turn one rejection into a rule about future relationships.",
      },
      {
        heading: "Respond with care for yourself",
        body: "Try to speak to yourself as you would to a friend. Let trusted people support you, and respect the other person's boundaries. If the hurt begins to interfere with everyday life for a sustained period, consider reaching out for professional support.",
        followUp:
          "A small plan for the next day can help when everything feels personal: eat something, get some rest, and make one low-pressure connection with someone you trust. These steps will not erase the disappointment, but they can make it easier to carry while the feeling changes.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "not-good-enough",
    title: "Why Do I Feel Not Good Enough for Someone I Love?",
    category: "Feelings & insecurity",
    read: 6,
    description:
      "You can feel insecure in a loving relationship. That feeling alone does not make you unworthy or mean the relationship is ending.",
    intro:
      "You can care about someone and still wonder whether you deserve their care. That thought may feel like a fact, especially when you are anxious, but feelings and evidence are not always the same thing.",
    sections: [
      {
        heading: "Notice the trigger",
        body: "Did a change in plans, an unanswered message or a comparison bring the thought up? Identifying the moment can separate what happened from what you fear it means.",
        followUp:
          "Write down the event in one column and your interpretation in another. “They cancelled dinner” is observable; “they are tired of me” is one possible explanation. You can stay open to the feeling while checking whether the conclusion is supported.",
      },
      {
        heading: "Ask for clarity without demanding certainty",
        body: "You might say, “I felt unsettled when we didn’t talk today. Could we check in about what works for both of us?” A conversation can clear up what happened, even if it cannot answer every worry.",
        followUp:
          "Choose a time when neither of you is rushing or already upset. Make a specific request, then leave room for the other person's perspective. Reassurance can be kind, but a partner cannot promise that you will never feel doubt again.",
      },
      {
        heading: "Keep your self-worth wider than romance",
        body: "Maintain friendships, interests and goals that matter to you. A relationship can be important without becoming the only proof that you matter. If self-critical thoughts persist, support from a counsellor or clinician may be useful.",
        followUp:
          "Notice the parts of your life that remain yours: a skill you are learning, a friendship you value, or a responsibility you handle. These are not distractions from love. They give you a broader place to stand when insecurity gets loud.",
      },
    ],
    sources: [nhs, attachment],
  },

  {
    slug: "understanding-jealousy",
    title: "Understanding Jealousy Without Romanticising It",
    category: "Feelings & insecurity",
    read: 7,
    description:
      "Jealousy can point to fear or unmet needs; it never gives someone permission to control another person.",
    intro:
      "Jealousy is an emotion, not proof of devotion and not a reliable guide to what another person has done. It can be useful to understand what is underneath it while staying responsible for your actions.",
    sections: [
      {
        heading: "Name the feeling and the story",
        body: "Try separating an observation (“they made plans with a friend”) from an interpretation (“they will leave me”). The interpretation may feel convincing without being confirmed.",
      },
      {
        heading: "Choose a response that respects both people",
        body: "It is fair to ask for reassurance or talk about agreements. It is not fair to monitor someone's phone, isolate them, threaten them or demand that they give up ordinary friendships. Those actions restrict another person's freedom.",
      },
      {
        heading: "Look for recurring patterns",
        body: "If jealousy keeps coming up, ask what might be underneath it. A trusted person or counsellor can help you work that out without shaming you.",
      },
      {
        heading: "When jealousy becomes control",
        body: "If someone checks your phone, limits your friendships or makes you afraid to disagree, that is more than an uncomfortable feeling. Talk to someone you trust or contact a local support service.",
      },
    ],
    sources: [nhs, respect],
  },

  {
    slug: "overthinking-messages",
    title: "Why We Overthink Messages and Silence",
    category: "Feelings & insecurity",
    read: 6,
    description:
      "A pause in a conversation can invite many explanations. Not all of them are evidence.",
    intro:
      "An unread message is easy to keep checking when you care about the person who sent it. Silence leaves a gap, and worry is quick to fill it.",
    sections: [
      {
        heading: "Separate facts from predictions",
        body: "The fact may be that a reply has not arrived. “They are angry” or “I ruined everything” are possible interpretations, not confirmed facts. Naming that difference can loosen the loop.",
      },
      {
        heading: "Set a boundary with checking",
        body: "Repeatedly opening an app rarely gives new information. You could choose a time to check again, then put your phone somewhere else and return to a task or person in front of you.",
      },
      {
        heading: "Talk about communication expectations",
        body: "People have different habits and schedules. When it feels appropriate, discuss what kind of communication works for each of you. Aim for clarity and flexibility rather than a rule that one person must always be available.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "attachment-styles",
    title: "Attachment Styles: What They Explain and What They Do Not",
    category: "Attachment & closeness",
    read: 8,
    description:
      "Attachment research can offer a lens on patterns, not a fixed label for your identity or future.",
    intro:
      "Attachment language can help describe how people seek closeness or respond to distance. Online quizzes make it look more certain than it is: a few answers cannot sum up your relationships.",
    sections: [
      {
        heading: "A research framework, not a personality verdict",
        body: "Attachment theory grew from research on how early caregiving relates to development. Adult attachment research examines expectations and responses in close relationships. These ideas describe patterns; they do not make people predictable in every context.",
      },
      {
        heading: "Patterns can shift with context",
        body: "A person may feel secure with one friend and anxious in a new romance. Stress, past experiences, current behaviour and the relationship itself all matter. Labels such as “anxious” or “avoidant” should not replace listening to the person.",
      },
      {
        heading: "Use the idea to ask better questions",
        body: "Instead of deciding “I am this type,” notice what happens when you need reassurance, space or repair. What helps you communicate clearly? What would you like to practise? If a pattern causes ongoing distress, a therapist can help explore it in context.",
      },
    ],
    sources: [attachment, apa],
  },

  {
    slug: "limerence",
    title: "What Is Limerence?",
    category: "Attachment & closeness",
    read: 7,
    description:
      "Limerence is a term for intense, often intrusive romantic preoccupation; it is not a formal diagnosis.",
    intro:
      "People use “limerence” for an intense preoccupation with someone, often when they are unsure whether the feeling is returned. The word may help describe what is happening; it is not a clinical diagnosis.",
    sections: [
      {
        heading: "An experience, not an identity",
        body: "People may describe replaying interactions, idealising someone or feeling unusually dependent on signs of interest. Similar experiences can have different causes. A label alone cannot explain yours.",
      },
      {
        heading: "Uncertainty can keep attention focused",
        body: "When interest is unclear, each small signal can seem important. Try to look at consistent behaviour and direct communication, not only at moments that support a hoped-for interpretation.",
      },
      {
        heading: "Return attention to your wider life",
        body: "Reduce repeated checking if it is adding distress. Reconnect with friends and routines, and consider talking with a mental health professional if preoccupation is interfering with daily life. A person's boundaries remain important regardless of how intense your feelings are.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "idealisation",
    title: "Love, Idealisation and the Person We Imagine",
    category: "Attachment & closeness",
    read: 6,
    description:
      "A strong first impression can tell you what you hope someone is like. Getting to know them tells you more.",
    intro:
      "Early attraction can make someone seem almost perfectly suited to us. Sometimes that impression reflects genuine qualities; sometimes imagination has completed a picture with very little information.",
    sections: [
      {
        heading: "Why the imagined version feels convincing",
        body: "When you are excited about someone, it is easy to notice the qualities you like and miss the things you have not learned yet. That does not make the attraction false; it means you are still getting to know them.",
      },
      {
        heading: "Let knowledge catch up",
        body: "Pay attention to everyday behaviour, differences and how each of you handles disappointment. A person is not a promise or a project. Curiosity is more useful than deciding too soon that you know who they are.",
      },
      {
        heading: "Hold hope gently",
        body: "You can enjoy possibility while leaving room for uncertainty. Mutual relationships are built by two real people making choices, not by one person proving that an imagined future should happen.",
      },
    ],
    sources: [apa, nhs],
  },

  {
    slug: "interdependence",
    title: "Emotional Dependence and Healthy Interdependence",
    category: "Attachment & closeness",
    read: 7,
    description:
      "Close relationships involve relying on each other. Both people still need choices and support beyond the relationship.",
    intro:
      "People need other people. Depending on a partner or friend for comfort is not automatically a problem. The question is whether support can be mutual and freely chosen, rather than demanded at the cost of either person's wellbeing.",
    sections: [
      {
        heading: "Support should go both ways",
        body: "In a supportive relationship, each person can ask for help and keep their own friends, interests and decisions. Needing comfort does not mean either person has to be available every minute.",
      },
      {
        heading: "Notice when life is narrowing",
        body: "If one connection is replacing most sources of support, or you feel unable to make ordinary choices without approval, it may help to rebuild other supports gradually. These signs are invitations to reflect, not diagnoses.",
      },
      {
        heading: "Practise asking and negotiating",
        body: "Make a clear request and let the other person answer honestly. “Could we set aside time to talk tonight?” gives them a choice; demanding an immediate reply does not. A counsellor can help if fear or distress keeps taking over.",
      },
    ],
    sources: [nhs, attachment],
  },

  {
    slug: "respect-rejection",
    title: "How to Respect Someone's Feelings When They Reject You",
    category: "Unrequited love",
    read: 5,
    description:
      "Being turned down hurts. You can look after yourself and still respect the other person’s answer.",
    intro:
      "Rejection can bring an urge to explain, persuade or seek one more conversation. The wish for clarity is understandable; the other person still gets to decide whether they want contact or a relationship.",
    sections: [
      {
        heading: "Accept the boundary",
        body: "If someone says no or asks for space, do not keep contacting them, involve friends to pressure them, or show up uninvited. Respect means taking their words seriously even when you are disappointed.",
      },
      {
        heading: "Take care of the hurt elsewhere",
        body: "Talk with a trusted friend, write down what you wish you could say without sending it, or choose a temporary break from reminders. Your feelings deserve care; the person who rejected you is not required to provide that care.",
      },
      {
        heading: "Let the future be open",
        body: "You may not get a complete explanation. That can be painful, but you can move forward without deciding that either person is cruel or defective. A no is a relationship boundary, not a challenge to overcome.",
      },
    ],
    sources: [respect, nhs],
  },

  {
    slug: "healthy-boundaries",
    title: "Healthy Boundaries Are Not a Lack of Love",
    category: "Healthy relationships",
    read: 6,
    description:
      "Boundaries describe what feels acceptable and what you will do to care for your wellbeing.",
    intro:
      "People sometimes fear that setting a limit will make them seem uncaring. In practice, clear boundaries can make relationships more honest by helping each person understand what is and is not okay.",
    sections: [
      {
        heading: "A boundary is about your participation",
        body: "You can say what you are comfortable with and what you will do if a situation continues. A boundary is not a way to control another person's choices. For example: “I cannot talk while we are shouting. I will take a break and come back when we are calmer.”",
      },
      {
        heading: "Limits can change",
        body: "A person may be comfortable with something one day and not another. Consent and boundaries are ongoing conversations, particularly around physical intimacy. No one owes access because of a past yes or a relationship label.",
      },
      {
        heading: "Notice the response",
        body: "People can be disappointed by a limit and still respect it. Repeated pressure, punishment or intimidation is concerning. If you feel unsafe setting a boundary, speak with someone you trust or seek specialist support.",
      },
    ],
    sources: [respect, nhs],
  },

  {
    slug: "conflict-and-repair",
    title: "What Healthy Conflict and Repair Look Like",
    category: "Healthy relationships",
    read: 7,
    description:
      "Disagreement happens. How people handle it can show whether respect and repair are possible.",
    intro:
      "Arguments happen in close relationships. The more telling question is what happens during and after them: can you speak without fear, take responsibility, and make a real effort to repair the hurt?",
    sections: [
      {
        heading: "Slow the conversation down",
        body: "When emotions rise, taking a break can help. Agree on when to return to the conversation so that time apart does not become a way to avoid the issue indefinitely.",
      },
      {
        heading: "Listen for understanding",
        body: "Try describing what you heard before defending your own view. Use specific examples and “I” statements about impact. Listening does not require agreeing with everything the other person says.",
      },
      {
        heading: "Repair includes changed behaviour",
        body: "An apology can matter, but repair also means understanding the impact and making a realistic effort not to repeat the harm. If conflict involves threats, coercion or physical danger, prioritise safety and seek outside help rather than trying to solve it as a communication problem.",
      },
    ],
    sources: [nhs, respect],
  },

  {
    slug: "controlling-behaviour",
    title: "Recognising Manipulation and Controlling Behaviour",
    category: "Difficult relationships",
    read: 8,
    description:
      "Look for repeated behaviours that restrict someone's freedom, rather than trying to diagnose a person.",
    intro:
      "It can be hard to name what is happening while you are in it. Start with what the person does: do they check your phone, limit who you see, or use threats to get their way? Does it make you afraid to disagree or say no?",
    sections: [
      {
        heading: "Patterns matter",
        body: "Examples can include monitoring devices or messages, isolating someone from friends, controlling money, pressuring sexual activity, threats, or punishing a person for saying no. One incident may have different context, but patterns that create fear or loss of freedom are serious.",
      },
      {
        heading: "Avoid amateur diagnosis",
        body: "You do not need to decide whether someone is a “narcissist” or assign a clinical label to take your own experience seriously. Describe what happened, what you fear, and what support you need.",
      },
      {
        heading: "Think about safety first",
        body: "If you are worried about how someone may react, do not confront them alone. Tell someone you trust or contact a local specialist service, using a safer device if needed. In immediate danger, contact emergency services where you are.",
      },
      {
        heading: "If you are worried about your own behaviour",
        body: "Take repeated checking, threats or pressure seriously. Stop the behaviour and look for a counsellor or specialist programme that works with controlling behaviour. The other person is not responsible for managing your reaction.",
      },
    ],
    sources: [respect, nhs],
  },

  {
    slug: "heartbreak-everyday-life",
    title: "Why Heartbreak Can Affect Everyday Life",
    category: "Heartbreak & healing",
    read: 6,
    description:
      "The end of a relationship can disrupt routines and concentration; recovery does not follow one schedule.",
    intro:
      "After a breakup, ordinary tasks may feel harder. You might sleep differently, lose focus or find reminders everywhere. This can be part of responding to a meaningful loss; it is not a weakness.",
    sections: [
      {
        heading: "A loss can include more than a person",
        body: "You may miss the daily messages, shared plans, mutual friends or future you pictured. A breakup can mean losing several things at once.",
      },
      {
        heading: "Support the basics",
        body: "Small routines can offer structure: meals, rest, movement, study or work, and time with people who care about you. You do not need to feel fully better before taking one manageable step.",
      },
      {
        heading: "Ask for more help when needed",
        body: "There is no deadline for feeling okay. If distress is intense, persistent or making it hard to function, consider speaking with a qualified professional or trusted person. If you may be in immediate danger, contact local emergency help.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "support-a-friend",
    title: "How to Support a Friend Through Unrequited Love",
    category: "Friendship & belonging",
    read: 5,
    description:
      "You can listen without dismissing the feeling or encouraging someone to cross another person's boundaries.",
    intro:
      "When a friend is hurting over someone who does not feel the same, you may want to fix it for them. You do not have to. Listening, keeping them company and being honest can mean more than having an answer.",
    sections: [
      {
        heading: "Listen before advising",
        body: "Ask what would help right now: company, distraction, or space to talk. Avoid telling them to “just move on” or promising that the other person will change their mind.",
      },
      {
        heading: "Be kind and clear about boundaries",
        body: "You can validate the hurt while discouraging repeated unwanted contact. “I know you care about them. They asked for space, and we should respect that. I can stay with you while this feels hard.”",
      },
      {
        heading: "Know your own limits",
        body: "Supporting a friend does not mean being available at every moment or carrying the situation alone. Encourage them to connect with other trusted people or a professional if the distress is affecting daily life.",
      },
    ],
    sources: [nhs, respect],
  },

  {
    slug: "love-beyond-romance",
    title: "Love Beyond Romance: Friendship, Family and Belonging",
    category: "Friendship & belonging",
    read: 6,
    description:
      "Romantic love can matter deeply without being the only kind of connection that makes a life meaningful.",
    intro:
      "Romance gets plenty of attention in films, songs and advice columns. The friend who checks in, the family member who shows up, or the community that knows your name can matter just as much.",
    sections: [
      {
        heading: "Different relationships offer different things",
        body: "A friend may know your history; a sibling may share everyday responsibilities; a community may help you feel part of something larger. These bonds need not compete with romantic relationships to count.",
      },
      {
        heading: "There is no required life sequence",
        body: "Being single, ending a relationship or not wanting romance does not make you incomplete. Close bonds can grow through friendship, family and community at any age.",
      },
      {
        heading: "Invest in the care already around you",
        body: "Notice who helps you feel respected and more yourself. A small message, shared meal or honest conversation can strengthen a bond. You can also make room for new connection through interests and communities that matter to you.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "miss-and-move-on",
    title: "Can You Miss Someone and Know the Relationship Was Wrong for You?",
    category: "Heartbreak & healing",
    read: 6,
    description:
      "You can miss someone and still know the relationship was not right for you.",
    intro:
      "Longing can make the past look simpler than it was. You may miss someone's humour, familiar routines or the future you imagined while also knowing that parts of the relationship hurt you.",
    sections: [
      {
        heading: "Missing is not a decision",
        body: "Feelings often reflect attachment and memory, not a complete evaluation of whether returning would be right for you. They can show up even when you have made a considered choice.",
      },
      {
        heading: "Keep the whole picture",
        body: "If it helps, write down both what you miss and what led you to leave. This is not a case against the other person; it is a way to remember your own experience when nostalgia becomes selective.",
      },
      {
        heading: "Take time before acting",
        body: "A wave of loneliness does not require an immediate message. Give yourself space to settle, talk with someone you trust and consider what would need to change for contact to feel healthy and safe.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "rebuild-after-breakup",
    title: "How to Rebuild Your Sense of Self After a Breakup",
    category: "Heartbreak & healing",
    read: 7,
    description:
      "Rebuilding is less about becoming a new person than reconnecting with parts of you that need attention.",
    intro:
      "A relationship can shape your routines, plans and sense of yourself. When it ends, even small decisions—what to do with a free evening, who to call—can feel unfamiliar. You can work those things out a little at a time.",
    sections: [
      {
        heading: "Start with small choices",
        body: "Choose one activity because it matters to you, not because it will prove you are thriving. Revisit a hobby, cook something you like or spend time with a friend who makes room for the full story.",
      },
      {
        heading: "Make space for mixed feelings",
        body: "You can feel relief, grief, affection and anger in the same week. None of those emotions require you to revise the whole relationship into either perfect or worthless.",
      },
      {
        heading: "Build support beyond one person",
        body: "Reconnect with trusted relationships and ordinary routines. If you feel stuck or distressed for a sustained period, professional support can help you make sense of the transition at your own pace.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "love-or-loneliness",
    title: "Is It Love, Loneliness or Fear of Being Alone?",
    category: "Friendship & belonging",
    read: 6,
    description:
      "Love and loneliness can overlap. Looking at what you need may tell you more than choosing a label.",
    intro:
      "Sometimes a longing for a particular person sits beside a longing for closeness in general. Both can be true. Naming the needs underneath a feeling may help you choose a response that cares for you and respects others.",
    sections: [
      {
        heading: "Ask what you are missing",
        body: "Are you drawn to this person's specific qualities, or are you mainly craving company, reassurance or touch? There is no wrong answer; the question may reveal more than the label does.",
      },
      {
        heading: "Find connection in more than one place",
        body: "If loneliness is present, romantic pursuit is not the only possible response. A conversation with a friend, a group activity or time with family can meet some needs without asking one person to meet them all.",
      },
      {
        heading: "Let a relationship be a choice",
        body: "A healthy relationship is not a cure for loneliness or a requirement for worth. Give yourself time to decide whether you want this connection for who the person is and how you relate, not only for the fear of being alone.",
      },
    ],
    sources: [nhs],
  },

  {
    slug: "loved-but-insecure",
    title: "Why Being Loved Does Not Automatically Remove Insecurity",
    category: "Feelings & insecurity",
    read: 6,
    description:
      "Someone can love you and you can still feel unsure of yourself. Reassurance helps sometimes; it does not settle every fear.",
    intro:
      "It is tempting to think that if someone loves us enough, we will never doubt ourselves. Real emotions are more complicated: reassurance can help, but it cannot always undo old fears or guarantee a feeling of certainty.",
    sections: [
      {
        heading: "Reassurance has limits",
        body: "A partner can listen and show care, but no one can be available every minute or answer every worry permanently. This limit is not proof that love is absent.",
      },
      {
        heading: "Build more than one source of steadiness",
        body: "Self-compassion, supportive friendships, meaningful activities and clear agreements can all help. This does not mean you should suppress reasonable concerns about how someone treats you.",
      },
      {
        heading: "Talk about needs with care",
        body: "Try a specific request and invite a real conversation. If insecurity is persistent, intense or tied to painful past experiences, a counsellor can help you explore it without blaming yourself.",
      },
    ],
    sources: [nhs, attachment],
  },
];

export const allArticles = articles;

export const categories = [...new Set(articles.map((a) => a.category))];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
