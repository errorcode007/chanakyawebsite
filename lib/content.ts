export const siteInfo = {
  name: 'Chanakya Legal Chamber',
  tagline: 'Lighting The Path To Justice',
  logo: 'https://lh3.googleusercontent.com/a-/ALV-UjVXTpMlAwgNqUrTGPaKxKjb196CiWQOVDTvz0hUSJdoAYyHBoM=w1470',
  phone: '9797177212',
  whatsapp: '919792177212',
  email: 'info@chanakyalegalchamber.com',
  address: 'LGF 51, Crystal City Center, below KFC, Opp. Lucknow Public Collegiate, Lucknow, Uttar Pradesh – 226012',
  hours: 'Mon–Sat: 9:00 AM – 10:00 PM',
  rating: 4.3,
  reviewCount: 10,
  domain: 'https://chanakyalegalchamber.com',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5!2d80.925765!3d26.7805426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb8916e317ed%3A0x7cbde44eb3e46146!2sChanakya+Legal+Chamber!5e0!3m2!1sen!2sin',
  socialLinks: {
    google: 'https://g.co/kgs/chanakyalegal',
  },
}

export interface PracticeArea {
  name: string
  slug: string
  icon: string
  shortDescription: string
  description: string
}

export const practiceAreas: PracticeArea[] = [
  {
    name: 'Appellate Advocacy',
    slug: 'appellate-advocacy',
    icon: '⚖️',
    shortDescription: 'Expert representation in appellate courts for appeals and revisions.',
    description: `Chanakya Legal Chamber provides skilled appellate advocacy services before the High Court and Supreme Court of India. Our advocates have extensive experience in drafting and arguing appeals, revisions, and special leave petitions.

We handle civil appeals, criminal appeals, writ petitions, and constitutional matters. Our team meticulously reviews trial court records to identify grounds for appeal and craft persuasive arguments that address legal errors, misinterpretation of evidence, or procedural irregularities.

Whether you are seeking to challenge an adverse judgment or defending a favorable decision on appeal, our advocates bring the analytical depth and courtroom experience needed for effective appellate litigation in Uttar Pradesh courts.`,
  },
  {
    name: 'Bankruptcy Representation',
    slug: 'bankruptcy-representation',
    icon: '📋',
    shortDescription: 'Legal guidance through insolvency and bankruptcy proceedings under IBC.',
    description: `Our firm provides representation in insolvency and bankruptcy matters under the Insolvency and Bankruptcy Code, 2016. We assist both creditors and debtors navigating the corporate insolvency resolution process (CIRP) and individual insolvency proceedings.

Our services include filing applications before the National Company Law Tribunal (NCLT), representing stakeholders in committee of creditors meetings, advising on resolution plans, and handling liquidation proceedings.

We help businesses facing financial distress explore all available options including restructuring, one-time settlements, and voluntary liquidation while protecting the interests of promoters, creditors, and employees.`,
  },
  {
    name: 'Business Transactions',
    slug: 'business-transactions',
    icon: '🤝',
    shortDescription: 'Structuring and documenting commercial transactions and business deals.',
    description: `Chanakya Legal Chamber advises businesses on structuring, negotiating, and documenting commercial transactions. From company incorporation and partnership deeds to joint ventures and franchise agreements, we provide end-to-end legal support.

Our transactional practice covers drafting and reviewing commercial contracts, due diligence, regulatory compliance, and advisory on business structuring under Indian company law. We work with startups, MSMEs, and established businesses across Lucknow and Uttar Pradesh.

We ensure every transaction is structured to minimize legal risk, optimize tax efficiency, and protect our clients' commercial interests in the long term.`,
  },
  {
    name: 'Case Assessments',
    slug: 'case-assessments',
    icon: '🔍',
    shortDescription: 'Thorough evaluation of legal matters to determine merits and strategy.',
    description: `Before committing to litigation, it is essential to understand the strengths and weaknesses of your case. Our case assessment service provides an honest, detailed evaluation of your legal matter including potential outcomes, timelines, and costs.

Our advocates review all relevant documents, precedents, and applicable laws to give you a clear picture of where you stand. We identify potential challenges, assess evidentiary strengths, and recommend whether to pursue litigation, negotiation, or alternative dispute resolution.

This service is particularly valuable for individuals and businesses considering legal action but wanting an informed opinion before investing time and resources in court proceedings.`,
  },
  {
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    icon: '🏛️',
    shortDescription: 'Representation in civil disputes including property, contracts, and recovery.',
    description: `Civil litigation forms the core of our practice. We represent clients in a wide range of civil matters before district courts, the Lucknow Bench of the Allahabad High Court, and tribunals across Uttar Pradesh.

Our civil practice encompasses property disputes, recovery suits, specific performance claims, injunction applications, declaratory suits, partition matters, and landlord-tenant disputes. We handle both original suits and appeals with equal thoroughness.

Our approach combines aggressive litigation with pragmatic settlement negotiation. We understand that not every dispute needs to go to trial, and we advise clients on the most cost-effective path to resolution while always being prepared for full-scale litigation when necessary.`,
  },
  {
    name: 'Contracts & Agreements Litigation',
    slug: 'contracts-agreements-litigation',
    icon: '📝',
    shortDescription: 'Disputes arising from breach of contract and commercial agreements.',
    description: `When contractual relationships break down, swift and effective legal action is essential to protect your interests. Our firm handles all aspects of contract litigation including breach of contract claims, specific performance suits, and damages recovery.

We litigate disputes arising from commercial contracts, service agreements, supply contracts, construction agreements, lease agreements, and employment contracts. Our advocates are experienced in both seeking and defending against claims of contractual breach.

We also advise on contract interpretation, force majeure claims, and remedies available under the Indian Contract Act, 1872 and the Specific Relief Act, 1963.`,
  },
  {
    name: 'Corporate Litigation',
    slug: 'corporate-litigation',
    icon: '🏢',
    shortDescription: 'Legal disputes involving companies, shareholders, and directors.',
    description: `Our corporate litigation practice handles disputes involving companies, their shareholders, directors, and stakeholders. We appear before the NCLT, NCLAT, and civil courts on matters of corporate governance, oppression and mismanagement, and shareholder disputes.

We represent clients in winding-up petitions, class action suits, derivative actions, disputes over share transfers, and challenges to board resolutions. Our team understands the intersection of the Companies Act, 2013, SEBI regulations, and general corporate law.

Whether you are a minority shareholder seeking relief from oppression or a company defending against frivolous litigation, our advocates provide strategic counsel backed by thorough legal research.`,
  },
  {
    name: 'Criminal Defence Litigation',
    slug: 'criminal-defence-litigation',
    icon: '🛡️',
    shortDescription: 'Defending individuals and businesses against criminal charges.',
    description: `Our criminal defence team provides vigorous representation to individuals and corporate entities facing criminal charges. We handle matters at every stage from FIR registration to trial and appeal, including bail applications, anticipatory bail, and quashing petitions.

Our defence practice covers IPC offences, white-collar crimes, economic offences, cybercrime, NDPS matters, and offences under special statutes. We prioritize early intervention to protect our clients' liberty and reputation.

We believe in thorough preparation, aggressive cross-examination, and strategic defence planning. Every accused person deserves quality legal representation, and our advocates bring the dedication and skill needed to secure the best possible outcome.`,
  },
  {
    name: 'Criminal Litigation',
    slug: 'criminal-litigation',
    icon: '⚔️',
    shortDescription: 'Prosecution support and victim representation in criminal matters.',
    description: `Beyond defence, our criminal practice includes representing victims and complainants in criminal proceedings. We assist with filing FIRs, private complaints under Section 200 CrPC, and represent victims in trial proceedings.

Our services include drafting criminal complaints, filing applications for police investigation under Section 156(3), representing victims in bail opposition, and pursuing appeals against acquittals. We handle matters involving fraud, cheating, criminal breach of trust, assault, and other IPC offences.

We understand the criminal justice system in UP courts and guide our clients through every step, from initial complaint to final adjudication, ensuring their voice is heard and their rights are protected.`,
  },
  {
    name: 'Disability Benefits Litigation',
    slug: 'disability-benefits-litigation',
    icon: '♿',
    shortDescription: 'Securing rightful disability benefits and fighting discrimination.',
    description: `We represent persons with disabilities in matters relating to their statutory rights and benefits under the Rights of Persons with Disabilities Act, 2016 and related legislation. Our practice includes challenging wrongful denial of benefits, reservation in employment, accessibility issues, and discrimination.

We file writ petitions, represent clients before disability commissioners, and pursue claims for educational accommodations, workplace modifications, and government scheme benefits. Our advocates are committed to ensuring that persons with disabilities receive the full protection of law.

If you or a family member has been denied disability benefits, pension, or faced discrimination on grounds of disability, we can help you assert your legal rights through appropriate legal channels.`,
  },
  {
    name: 'Divorce Litigation',
    slug: 'divorce-litigation',
    icon: '💔',
    shortDescription: 'Handling divorce, maintenance, custody, and matrimonial disputes.',
    description: `Our family law practice handles all aspects of matrimonial litigation including contested and mutual consent divorce, judicial separation, restitution of conjugal rights, maintenance claims, and child custody disputes.

We appear before family courts in Lucknow and handle matters under the Hindu Marriage Act, Special Marriage Act, Muslim personal law, and the Protection of Women from Domestic Violence Act. Our approach balances aggressive advocacy with sensitivity to the emotional aspects of family disputes.

We also handle ancillary matters including division of matrimonial property, streedhan recovery, protection orders, and custody/visitation arrangements. When amicable resolution is possible, we facilitate mediation and settlement; when litigation is unavoidable, we fight tenaciously for our clients' rights.`,
  },
  {
    name: 'Education Litigation',
    slug: 'education-litigation',
    icon: '🎓',
    shortDescription: 'Disputes involving educational institutions, admissions, and examinations.',
    description: `Our education law practice handles disputes between students, parents, and educational institutions. We challenge arbitrary admissions decisions, unfair examination practices, excessive fee hikes, and wrongful expulsions or rustications.

We file writ petitions before the High Court challenging violations of Right to Education Act, UGC regulations, AICTE norms, and university statutes. Our team handles matters involving recognition of institutions, affiliation disputes, and regulatory compliance issues.

Whether you are a student denied admission despite meeting criteria, a parent challenging exorbitant fees, or an institution facing regulatory action, we provide knowledgeable representation in education-related legal matters across Uttar Pradesh.`,
  },
  {
    name: 'Employment Litigation',
    slug: 'employment-litigation',
    icon: '👔',
    shortDescription: 'Workplace disputes including wrongful termination and labour rights.',
    description: `We represent both employers and employees in workplace disputes. Our employment practice covers wrongful termination, non-payment of wages, sexual harassment complaints, service disputes, and matters before labour courts and industrial tribunals.

For employees, we handle claims for reinstatement, back wages, gratuity, provident fund disputes, and compensation for workplace injuries. For employers, we defend against frivolous claims, advise on compliant termination procedures, and represent in conciliation and adjudication proceedings.

Our expertise spans the Industrial Disputes Act, Payment of Wages Act, Employees' Provident Fund Act, Sexual Harassment of Women at Workplace Act, and the new labour codes. We understand both sides of the employment relationship and provide balanced, practical counsel.`,
  },
  {
    name: 'Entertainment Litigation',
    slug: 'entertainment-litigation',
    icon: '🎬',
    shortDescription: 'Legal matters in media, entertainment, and intellectual property.',
    description: `Our entertainment law practice serves artists, producers, musicians, and media companies in legal matters unique to the creative industries. We handle copyright disputes, talent agreements, production contracts, and content licensing matters.

We advise on intellectual property protection for creative works, negotiate and draft artist management contracts, handle music rights disputes, and represent clients in defamation matters arising from published content.

Whether you are an independent artist protecting your creative work, a production house structuring talent deals, or a content creator facing unauthorized use of your material, we provide legal expertise tailored to the entertainment and media sector.`,
  },
  {
    name: 'Environment Litigation',
    slug: 'environment-litigation',
    icon: '🌿',
    shortDescription: 'Environmental protection cases and regulatory compliance matters.',
    description: `Our environmental law practice handles matters before the National Green Tribunal (NGT), High Courts, and pollution control boards. We represent communities affected by pollution, industries seeking environmental clearances, and NGOs pursuing public interest environmental litigation.

We handle matters under the Environment Protection Act, Water Act, Air Act, Forest Conservation Act, and Wildlife Protection Act. Our services include challenging illegal construction, industrial pollution, deforestation, and violation of environmental norms.

We also advise businesses on environmental compliance, obtaining necessary clearances, and responding to show-cause notices from pollution control authorities. Our goal is to balance development with environmental protection through effective legal advocacy.`,
  },
  {
    name: 'Labour Litigation',
    slug: 'labour-litigation',
    icon: '⚙️',
    shortDescription: 'Industrial disputes, trade union matters, and worker rights litigation.',
    description: `Our labour law practice represents workers, trade unions, and employers in industrial disputes and matters before labour courts, industrial tribunals, and the Labour Commissioner's office in Uttar Pradesh.

We handle matters of illegal retrenchment, closure, layoff, strike and lockout disputes, unfair labour practices, and implementation of awards and settlements. We assist trade unions with registration, dispute raising procedures, and collective bargaining.

For employers, we advise on compliance with factory laws, minimum wages, contract labour regulations, and the new labour codes. We represent management in conciliation proceedings, domestic inquiries, and challenges to government references under the Industrial Disputes Act.`,
  },
  {
    name: 'Legal Advice',
    slug: 'legal-advice',
    icon: '💡',
    shortDescription: 'General legal consultation and advisory services across practice areas.',
    description: `Sometimes you need legal guidance before a dispute arises. Our legal advisory service provides consultation on a wide range of legal matters including property transactions, business decisions, family matters, and regulatory compliance.

We offer both one-time consultations and ongoing advisory retainers for businesses. Our advice is practical, actionable, and tailored to your specific situation. We explain your legal position, outline available options, and recommend the most appropriate course of action.

Whether you need to understand your rights in a property transaction, evaluate a business contract before signing, or get guidance on a family matter, our experienced advocates are available for confidential consultation at our Lucknow office or via phone.`,
  },
  {
    name: 'Legal Malpractice Litigation',
    slug: 'legal-malpractice-litigation',
    icon: '⚠️',
    shortDescription: 'Claims against legal professionals for negligence or misconduct.',
    description: `When legal professionals fail in their duty to clients, the consequences can be severe — lost cases, missed deadlines, misappropriated funds, or conflicts of interest that prejudice outcomes. Our firm handles claims of legal malpractice and professional negligence against advocates, law firms, and legal service providers.

We pursue complaints before the Bar Council of India and State Bar Councils, file civil suits for damages arising from professional negligence, and represent clients who have suffered due to advocate misconduct.

If you believe your former advocate's negligence or misconduct caused you material loss — whether through missing limitation periods, failing to file necessary documents, misrepresenting case status, or any other breach of professional duty — we can evaluate your claim and pursue appropriate remedies.`,
  },
]

export interface TeamMember {
  name: string
  designation: string
  photo: string
  specialization: string
  barEnrolment: string
  yearsOfPractice: number
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Adv. Akash Saurabh',
    designation: 'Advocate, High Court',
    photo: 'https://lh3.googleusercontent.com/YHj1oAs9ZXQSu1Fpi8_QthPs3U6KaoLTUECl2EQw2VTBs8XgrMpAgh0NT5uXpHqtnxFZqoR7qVDGLQzx=w1470',
    specialization: 'Family Court, High Court, GST, Agreements',
    barEnrolment: '',
    yearsOfPractice: 2,
  },
]

export interface Testimonial {
  clientName: string
  caseType: string
  rating: number
  review: string
}

export const testimonials: Testimonial[] = [
  { clientName: 'Ramesh K.', caseType: 'Property Dispute', rating: 5, review: 'Chanakya Legal Chamber handled my property dispute with exceptional professionalism. They secured a favorable judgment within 8 months. Highly recommended for civil matters.' },
  { clientName: 'Sunita D.', caseType: 'Divorce & Custody', rating: 5, review: 'During the most difficult time of my life, the team provided compassionate yet aggressive representation. Got full custody of my children and fair maintenance.' },
  { clientName: 'Vikram S.', caseType: 'Criminal Defence', rating: 4, review: 'Was falsely accused in a cheating case. The advocates at Chanakya Legal Chamber got me acquitted by systematically dismantling the prosecution case. Professional and thorough.' },
  { clientName: 'Meera P.', caseType: 'Employment Dispute', rating: 5, review: 'After wrongful termination, they helped me get reinstated with full back wages. Their knowledge of labour law is outstanding. Thank you for fighting for my rights.' },
  { clientName: 'Arun G.', caseType: 'Business Transaction', rating: 4, review: 'They structured our joint venture agreement and handled all regulatory compliance. The documentation was thorough and the advice was practical. Good value for money.' },
  { clientName: 'Kavita R.', caseType: 'Education Matter', rating: 5, review: 'My daughter was denied admission despite qualifying. They filed a writ petition and got the admission order within 2 weeks. Incredible speed and expertise.' },
  { clientName: 'Deepak M.', caseType: 'Civil Litigation', rating: 4, review: 'Recovery suit for Rs. 15 lakhs was handled efficiently. They secured an interim order quickly and the matter was resolved through negotiation. Good result without prolonged litigation.' },
  { clientName: 'Anjali T.', caseType: 'Corporate Dispute', rating: 5, review: 'Minority shareholder dispute was complex but they navigated the NCLT proceedings expertly. Got a fair buyout arrangement. Knowledgeable in corporate law.' },
  { clientName: 'Suresh B.', caseType: 'Criminal Matter', rating: 4, review: 'Got anticipatory bail within 48 hours of approaching them. They understood the urgency and acted swiftly. Reliable criminal defence advocates.' },
  { clientName: 'Pooja L.', caseType: 'Appellate Matter', rating: 5, review: 'After losing in the trial court, they successfully argued my appeal before the High Court. Their legal research and arguments were exceptional. Reversed an unjust order.' },
]

export interface BlogPost {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  body: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Understanding Civil Litigation in UP Courts',
    slug: 'understanding-civil-litigation-up-courts',
    date: '2024-12-15',
    category: 'Civil Law',
    excerpt: 'A comprehensive guide to filing and pursuing civil cases in Uttar Pradesh district courts, from drafting the plaint to execution of decrees.',
    body: `## What is Civil Litigation?

Civil litigation refers to legal disputes between two or more parties seeking monetary damages or specific performance rather than criminal sanctions. In Uttar Pradesh, civil cases are filed before District Courts, and appeals lie to the Allahabad High Court (Lucknow Bench).

## Common Types of Civil Cases

- **Property disputes** — title claims, possession suits, partition
- **Recovery suits** — money owed under contracts or agreements
- **Specific performance** — enforcing contractual obligations
- **Injunctions** — preventing someone from taking a harmful action
- **Declaratory suits** — establishing legal rights

## The Process

1. **Filing**: Draft and file the plaint with appropriate court fees
2. **Summons**: Court issues summons to the defendant
3. **Written Statement**: Defendant files their response within 30 days
4. **Framing of Issues**: Court identifies disputed questions
5. **Evidence**: Both sides present documentary and oral evidence
6. **Arguments**: Final arguments on law and facts
7. **Judgment**: Court delivers its decision

## Timeline

Civil cases in UP courts typically take 2-5 years at the trial stage. However, interim orders (temporary injunctions, orders of status quo) can be obtained within weeks of filing.

## Key Tips

- Always try negotiation or mediation before filing suit
- Preserve all documentary evidence carefully
- File the case within the limitation period (usually 3 years for most civil matters)
- Consider the cost-benefit analysis before committing to full trial`,
  },
  {
    title: 'Your Rights When Arrested: A Complete Guide',
    slug: 'rights-when-arrested-complete-guide',
    date: '2024-11-28',
    category: 'Criminal Law',
    excerpt: 'Know your fundamental rights during arrest, interrogation, and custody. Essential knowledge for every citizen.',
    body: `## Fundamental Rights During Arrest

Every person arrested in India has constitutional and statutory rights that the police must respect. Knowing these rights can protect you or your family members during a stressful situation.

## Your Key Rights

### Right to Know the Grounds of Arrest (Article 22)
- Police must inform you why you are being arrested
- The arrest memo must be prepared at the time of arrest

### Right to Legal Representation
- You have the right to consult an advocate of your choice
- If you cannot afford an advocate, you are entitled to free legal aid

### Right to Inform Someone
- Police must inform a family member or friend about your arrest
- This information must be communicated without unnecessary delay

### Right Against Self-Incrimination (Article 20(3))
- You cannot be compelled to be a witness against yourself
- You have the right to remain silent during interrogation

### Right to be Produced Before a Magistrate (Article 22)
- You must be produced before the nearest magistrate within 24 hours of arrest

## Important Supreme Court Guidelines (D.K. Basu v. State of West Bengal)

- Arresting officer must wear clear identification
- Arrest memo must be attested by a family member or respected local person
- Arrestee must be informed of the right to have someone notified
- Time, date, and place of arrest must be recorded
- Arrestee should be medically examined every 48 hours

## What to Do If Your Rights Are Violated

1. Note the badge number and name of the arresting officer
2. Contact a lawyer immediately
3. File a complaint with the Superintendent of Police
4. Apply for compensation under Article 21/22 before the High Court

## When Can Police Arrest Without a Warrant?

- Cognizable offences (IPC sections carrying 7+ years punishment)
- Person found with stolen property
- Person who obstructs a police officer
- Proclaimed offenders and habitual offenders`,
  },
  {
    title: 'How to File for Divorce in India: Step-by-Step',
    slug: 'how-to-file-divorce-india',
    date: '2024-10-20',
    category: 'Family Law',
    excerpt: 'Understanding the grounds, procedure, and timeline for divorce under Hindu Marriage Act and Special Marriage Act.',
    body: `## Types of Divorce in India

### Mutual Consent Divorce (Section 13B, Hindu Marriage Act)
Both parties agree to end the marriage. This is the fastest and least contentious route.

### Contested Divorce (Section 13, Hindu Marriage Act)
One party seeks divorce on specific grounds while the other may oppose it.

## Grounds for Contested Divorce

- Adultery
- Cruelty (physical or mental)
- Desertion for 2+ continuous years
- Conversion to another religion
- Mental disorder of incurable nature
- Communicable venereal disease
- Renunciation of the world
- Not heard alive for 7+ years

## Mutual Consent Divorce Process

1. **Joint Petition**: Both parties file together in Family Court
2. **First Motion**: Court records statements, grants 6-month cooling period
3. **Cooling Period**: Mandatory 6 months (can be waived by Supreme Court in exceptional cases)
4. **Second Motion**: Both parties reaffirm their consent
5. **Decree**: Court passes divorce decree

**Timeline**: 6-18 months

## Contested Divorce Process

1. **Filing Petition**: One party files with grounds stated
2. **Summons & Response**: Other party files written statement
3. **Mediation**: Court refers to mediation (mandatory attempt)
4. **Evidence**: Both parties lead evidence
5. **Arguments & Decree**: Final hearing and judgment

**Timeline**: 2-5 years typically

## Key Considerations

- **Maintenance**: Wife can claim maintenance during and after proceedings
- **Child Custody**: Court decides based on "best interest of the child"
- **Property**: Streedhan must be returned; other property divided per circumstances
- **Alimony**: One-time or periodic payment may be ordered

## Important Tips

- Try mediation or counseling before filing
- Gather all financial documents
- Keep communication records if cruelty is a ground
- Consult an experienced family law advocate before taking any step`,
  },
  {
    title: 'Protecting Your Business: Essential Legal Agreements',
    slug: 'protecting-business-essential-legal-agreements',
    date: '2024-09-15',
    category: 'Business Law',
    excerpt: 'The key legal documents every business in India needs — from partnership deeds to NDAs and employment contracts.',
    body: `## Why Legal Agreements Matter

Many business disputes arise from inadequate or absent written agreements. A well-drafted agreement prevents misunderstandings, protects your interests, and provides legal recourse if things go wrong.

## Essential Agreements for Every Business

### 1. Partnership Deed / Shareholders Agreement
- Defines roles, responsibilities, and profit-sharing
- Exit clauses and dispute resolution mechanisms
- Decision-making authority and voting rights

### 2. Employment Contracts
- Job description, compensation, and benefits
- Non-compete and confidentiality clauses
- Termination conditions and notice periods
- Intellectual property assignment

### 3. Non-Disclosure Agreement (NDA)
- Protects confidential business information
- Essential before sharing plans with potential partners or investors
- Defines what constitutes confidential information and duration of obligation

### 4. Service Agreements
- Scope of work clearly defined
- Payment terms and milestones
- Liability limitations and indemnification
- Termination and transition provisions

### 5. Vendor/Supplier Contracts
- Quality standards and delivery timelines
- Payment terms and penalties for delay
- Warranty and liability provisions
- Force majeure clauses

## Common Mistakes to Avoid

- Using generic templates without customization
- Not specifying dispute resolution mechanism
- Ignoring stamp duty requirements (makes agreement inadmissible)
- Verbal agreements for significant transactions
- Not updating agreements as business evolves

## Key Legal Requirements in UP

- Stamp duty must be paid on agreements (varies by type and value)
- Registration required for certain agreements (property, leases > 1 year)
- GST implications should be considered in service agreements
- Labour law compliance in employment contracts

## When to Consult a Lawyer

- Before signing any agreement involving significant money
- When entering a new partnership or joint venture
- Before hiring your first employee
- When a dispute arises under an existing agreement
- Before making or accepting a business investment`,
  },
]
