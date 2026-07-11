// Verified national helplines and government service numbers for Bangladesh.
export const emergencyGroups = [
  {
    id: 'g1',
    label: 'Life & Safety',
    numbers: [
      { id: 'n1', service: 'National Emergency', number: '999', description: 'Unified dispatch for police, fire & ambulance', available: '24/7' },
      { id: 'n2', service: 'Fire Service & Civil Defence HQ', number: '02-9562177', description: 'Direct line to fire service headquarters', available: '24/7' },
      { id: 'n3', service: 'Rapid Action Battalion (RAB)', number: '999', description: 'Elite force for serious crime — routed via national dispatch', available: '24/7' },
      { id: 'n4', service: 'Coast Guard', number: '16115', description: 'Maritime rescue & coastal emergencies', available: '24/7' },
      { id: 'n5', service: 'Disaster Management & Cyclone Warning', number: '1090', description: 'Cyclone, flood & disaster coordination', available: '24/7' },
      { id: 'n6', service: 'Disaster Advance Message Service', number: '10941', description: 'Early-warning alerts for upcoming disasters', available: '24/7' },
    ],
  },
  {
    id: 'g2',
    label: 'Women, Child & Legal Support',
    numbers: [
      { id: 'n7', service: 'Women & Child Helpline', number: '109', description: 'Support for abuse, harassment & violence', available: '24/7' },
      { id: 'n8', service: 'National Child Helpline', number: '1098', description: 'Protection & counselling for children', available: '24/7' },
      { id: 'n9', service: 'Police Cyber Support for Women (PCSW)', number: '01320-000888', description: 'Confidential support for online harassment', available: '24/7' },
      { id: 'n10', service: 'National Legal Aid Helpline', number: '16430', description: 'Free legal advice & assistance', available: 'Office hours' },
    ],
  },
  {
    id: 'g3',
    label: 'Cyber Crime & Digital Fraud',
    numbers: [
      { id: 'n11', service: 'Cyber Crime Portal (CID)', number: 'cybercrime.gov.bd', description: 'File a formal cyber crime complaint online', available: '24/7' },
      { id: 'n12', service: 'BTRC Telecom Helpline', number: '100', description: 'SIM fraud, call/SMS harassment & network complaints', available: '24/7' },
      { id: 'n13', service: 'bKash Fraud & Support', number: '16247', description: 'Freeze fraudulent mobile-banking transactions fast', available: '24/7' },
      { id: 'n14', service: 'Nagad Fraud & Support', number: '16167', description: 'Report unauthorized Nagad transactions', available: '24/7' },
    ],
  },
  {
    id: 'g4',
    label: 'Utilities & Municipal Services',
    numbers: [
      { id: 'n15', service: 'Electricity Emergency (PDB)', number: '16216', description: 'Report outages & electrical hazards', available: '24/7' },
      { id: 'n16', service: 'Titas Gas Emergency', number: '16496', description: 'Gas leaks & pipeline emergencies', available: '24/7' },
      { id: 'n17', service: 'Dhaka WASA (Water & Sewerage)', number: '16162', description: 'Water supply faults & sewerage emergencies', available: '24/7' },
      { id: 'n18', service: 'BTCL Landline Support', number: '16402', description: 'Fixed-line & broadband service faults', available: 'Office hours' },
    ],
  },
  {
    id: 'g5',
    label: 'Transport & Other Services',
    numbers: [
      { id: 'n19', service: 'Bangladesh Railway Helpline', number: '163', description: 'Railway accidents, ticketing & security', available: '24/7' },
      { id: 'n20', service: 'Bangladesh Bank Complaint Cell', number: '16263', description: 'Banking harassment or poor branch service', available: 'Office hours' },
      { id: 'n21', service: 'Anti-Corruption Commission', number: '106', description: 'Report corruption incidents confidentially', available: '24/7' },
      { id: 'n22', service: 'Probashi Bandhu (Expatriate) Helpline', number: '09654-333333', description: 'Support for migrant workers & their families', available: '24/7' },
      { id: 'n23', service: 'Krishi (Agriculture) Call Centre', number: '16123', description: 'Farming advice & agricultural emergencies', available: 'Office hours' },
    ],
  },
]

export const emergencyNumbers = emergencyGroups.flatMap((g) => g.numbers)
