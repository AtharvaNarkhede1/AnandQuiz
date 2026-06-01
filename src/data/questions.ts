export interface Question {
  id: number;
  question: string;
  options: string[];
  answers: string[]; // Array of correct options for multi-select support
  explanation: string;
  category?: string;
}

export const defaultQuestions: Question[] = [
  {
    "id": 1,
    "category": "Haemostasis & Blood",
    "question": "Disturbances in haemostasis are classified as:",
    "options": [
      "Coagulopathies",
      "Thrombocytopathies",
      "Vasopathies",
      "Fibrilopathies"
    ],
    "answers": [
      "Coagulopathies",
      "Thrombocytopathies",
      "Vasopathies"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 2,
    "category": "Haemostasis & Blood",
    "question": "Coagulopathies develop as a result of:",
    "options": [
      "Quantitative and qualitative alterations in thrombocytes",
      "Alterations in the permeability of the vessel wall",
      "Quantitative and qualitative alterations in plasma factors",
      "Quantitative and qualitative alterations in erythrocytes",
      "Spontaneous haemodilution"
    ],
    "answers": [
      "Quantitative and qualitative alterations in plasma factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 3,
    "category": "Pathophysiology",
    "question": "The genetically caused deficiency of factor VIII is a main pathogeneticunit in:",
    "options": [
      "Haemolytic disease of the newborn",
      "Haemophilia A",
      "Haemolytic anemia of Minkowski-Chauffard",
      "Haemoglobinopathies",
      "Thrombasthenias"
    ],
    "answers": [
      "Haemophilia A"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 4,
    "category": "Haemostasis & Blood",
    "question": "Which are the pathogenetic mechanisms in the development of thrombocytopenia?:",
    "options": [
      "Suppressed thrombogenesis",
      "Increased platelets destruction in the periphery",
      "Suppressed thrombin synthesis"
    ],
    "answers": [
      "Suppressed thrombogenesis",
      "Increased platelets destruction in the periphery"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 5,
    "category": "Haemostasis & Blood",
    "question": "Hemophilia A is associated with",
    "options": [
      "Mutation in the sex X chromosome",
      "Deficiency of factor VIII",
      "Factor IX deficiency",
      "Deficiency Factor XI",
      "Mutation in an autosome"
    ],
    "answers": [
      "Mutation in the sex X chromosome",
      "Deficiency of factor VIII"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 6,
    "category": "Haemostasis & Blood",
    "question": "Hemophilia B is associated with (2):",
    "options": [
      "Mutation in the sex X chromosome",
      "Deficiency of factor VIII",
      "Factor IX deficiency",
      "Deficiency Factor XI",
      "Mutation in an autosome"
    ],
    "answers": [
      "Mutation in the sex X chromosome",
      "Factor IX deficiency"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 7,
    "category": "Haemostasis & Blood",
    "question": "Dysfunction of thrombocytes can be observed with:",
    "options": [
      "Taking aspirin",
      "Hemophilia A",
      "Hemophilia B",
      "Glanzmann thrombasthenia",
      "Diseases of von Willebrand"
    ],
    "answers": [
      "Taking aspirin",
      "Glanzmann thrombasthenia",
      "Diseases of von Willebrand"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 8,
    "category": "Haemostasis & Blood",
    "question": "Type of bleeding with hemophilia A:",
    "options": [
      "Hematoma",
      "Petechial spotted",
      "Vasculitis magenta",
      "Angiomatous",
      "Mixed"
    ],
    "answers": [
      "Hematoma"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 9,
    "category": "Haemostasis & Blood",
    "question": "Specify the type of bleeding with thrombocytopenia and thrombocytopathy:",
    "options": [
      "Hematoma",
      "Petechial haemorrhages",
      "Vasculitis magenta",
      "Angiomatous",
      "Mixed"
    ],
    "answers": [
      "Petechial haemorrhages"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 10,
    "category": "Haemostasis & Blood",
    "question": "For hemophilia A, the statement is true that it is due to",
    "options": [
      "Violation of the external coagulation mechanism",
      "Violation of the internal coagulation mechanism",
      "Factor VIII deficiency",
      "Factor IX deficiency",
      "Factor XI deficiency"
    ],
    "answers": [
      "Violation of the internal coagulation mechanism",
      "Factor VIII deficiency"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 11,
    "category": "Haemostasis & Blood",
    "question": "Indicate changes characteristic of von Willebrand disease:",
    "options": [
      "increase in the duration of capillary bleeding",
      "prolongation of blood coagulation time",
      "deficiency of von Willebrand factor",
      "platelet aggregation activation",
      "decrease in procoagulant activity of factor YIII"
    ],
    "answers": [
      "increase in the duration of capillary bleeding",
      "prolongation of blood coagulation time",
      "deficiency of von Willebrand factor",
      "decrease in procoagulant activity of factor YIII"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 12,
    "category": "Haemostasis & Blood",
    "question": "The following factors play a significant role in the pathogenesis of DIC syndrome:",
    "options": [
      "disseminated microthrombosis",
      "massive damage to body tissues",
      "lower tissue thromboplastin production",
      "platelet aggregation activation",
      "decreased activity of the fibrinolytic system"
    ],
    "answers": [
      "disseminated microthrombosis",
      "massive damage to body tissues",
      "platelet aggregation activation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 13,
    "category": "Pathophysiology",
    "question": "Anticoagulants include:",
    "options": [
      "antithrombin III",
      "heparin",
      "prothrombinase",
      "thromboxane A2"
    ],
    "answers": [
      "antithrombin III",
      "heparin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 14,
    "category": "Haemostasis & Blood",
    "question": "Indicate the factors causing the development of thrombocytopenia:",
    "options": [
      "inhibition of proliferation of megakaryoblasts",
      "displacement of megakaryocytic bone marrow growth by leukemia cells",
      "activation of leukocyte bone marrow growth in inflammation",
      "increased \"consumption\" of platelets in the process of thrombosis",
      "immune platelet damage"
    ],
    "answers": [
      "inhibition of proliferation of megakaryoblasts",
      "displacement of megakaryocytic bone marrow growth by leukemia cells",
      "increased \"consumption\" of platelets in the process of thrombosis",
      "immune platelet damage"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 15,
    "category": "Haemostasis & Blood",
    "question": "Indicate the causes of DIC:",
    "options": [
      "syndrome of \"prolonged crushing\"",
      "acute leukemia",
      "vitamin deficiency K",
      "sepsis",
      "shock"
    ],
    "answers": [
      "syndrome of \"prolonged crushing\"",
      "acute leukemia",
      "sepsis",
      "shock"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 16,
    "category": "Haemostasis & Blood",
    "question": "With hemophilia A, it will change:",
    "options": [
      "bleeding duration",
      "spontaneous platelet aggregation",
      "coagulation time",
      "thrombin time",
      "the amount of retraction of the clot"
    ],
    "answers": [
      "bleeding duration",
      "coagulation time"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 17,
    "category": "Pathophysiology",
    "question": "What pathological conditions have a high risk of thrombotic syndrome?",
    "options": [
      "Nephrotic syndrome",
      "Congestive heart failure",
      "Malignant tumors with disseminated metastases",
      "Liver failure",
      "Atherosclerosis",
      "Hyperthyroidism"
    ],
    "answers": [
      "Congestive heart failure",
      "Malignant tumors with disseminated metastases",
      "Atherosclerosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 18,
    "category": "Haemostasis & Blood",
    "question": "How many platelets in the peripheral blood cause spontaneous bleeding?",
    "options": [
      "100-120 x 10 9 / l",
      "20-50 x 109 / l",
      "less than 20 x 10 9 / l"
    ],
    "answers": [
      "less than 20 x 10 9 / l"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 19,
    "category": "Haemostasis & Blood",
    "question": "DIC syndrome is characterized by the following changes in the blood:",
    "options": [
      "Thrombocytopenia",
      "Hypofibrinogenemia",
      "Low levels of fibrinolysis products",
      "The increased level of antithrombin III",
      "The low content of factors II, V, VIII",
      "Elevated levels of a2-antiplasmin"
    ],
    "answers": [
      "Thrombocytopenia",
      "Hypofibrinogenemia",
      "The low content of factors II, V, VIII"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 20,
    "category": "Haemostasis & Blood",
    "question": "Thrombocytopenia is caused by a violation of platelet production in the bone marrow in the following forms of pathology:",
    "options": [
      "Acute leukemia",
      "Thrombotic thrombocytopenic purpura",
      "Splenomegaly",
      "Radiation sickness",
      "B12-folic deficiency anemia",
      "DIC",
      "Aplastic anemia",
      "Hemolytic uremic syndrome"
    ],
    "answers": [
      "Acute leukemia",
      "Radiation sickness",
      "B12-folic deficiency anemia",
      "Aplastic anemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 21,
    "category": "Haemostasis & Blood",
    "question": "What syndromes and forms of pathology cause disseminated small blood vessel thrombosis?",
    "options": [
      "Dissemenat ed intravascular coagulation",
      "Thrombotic thrombocytopenic purpura",
      "Atherosclerosis",
      "Hemolytic uremic syndrome",
      "The phenomenon of Arthus",
      "AIDS",
      "Vitamin K deficiency"
    ],
    "answers": [
      "Dissemenat ed intravascular coagulation",
      "Thrombotic thrombocytopenic purpura",
      "Hemolytic uremic syndrome"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 22,
    "category": "Haemostasis & Blood",
    "question": "Manifestations of the hypocoagulation stage of DIC syndrome",
    "options": [
      "thrombocytopenia",
      "hyperthromboplastinemia",
      "shortening of blood clotting time"
    ],
    "answers": [
      "thrombocytopenia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 23,
    "category": "Haemostasis & Blood",
    "question": "To which group of hemorrhagic diathesis does hemophilia belong?",
    "options": [
      "associated with blood clotting disorder",
      "associated with vascular wall disorder",
      "associated with platelet system pathology",
      "associated with anticoagulant system pathology"
    ],
    "answers": [
      "associated with blood clotting disorder"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 24,
    "category": "Haemostasis & Blood",
    "question": "In which vessels do blood clots form most often?",
    "options": [
      "in veins",
      "in arteries",
      "in capillaries",
      "in lymphatic vessels"
    ],
    "answers": [
      "in veins"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 25,
    "category": "Haemostasis & Blood",
    "question": "Absolute deficiency of vitamin K in the body will lead to",
    "options": [
      "impaired platelet adhesion",
      "intestinal dysbacteriosis",
      "hypercoagulation",
      "impaired platelet aggregation",
      "deficiency of coagulation factors in blood plasma"
    ],
    "answers": [
      "deficiency of coagulation factors in blood plasma"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 26,
    "category": "Haemostasis & Blood",
    "question": "The first stage of coagulation hemostasis ends with the formation of",
    "options": [
      "prothrombin",
      "prothrombinase"
    ],
    "answers": [
      "prothrombinase"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 27,
    "category": "Haemostasis & Blood",
    "question": "The intrinsic pathway of coagulation hemostasis begins with",
    "options": [
      "activation of prothrombi n",
      "release of thromboplastin",
      "activation of contact factor",
      "activation of prothrombinase",
      "activation of platelets"
    ],
    "answers": [
      "activation of contact factor"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 28,
    "category": "Haemostasis & Blood",
    "question": "The extrinsic pathway of coagulation hemostasis begins with",
    "options": [
      "activation of prothrombin",
      "release of thromboplastin",
      "activation of contact factor",
      "activation of prothrombinase",
      "activation of platelets"
    ],
    "answers": [
      "release of thromboplastin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 29,
    "category": "Haemostasis & Blood",
    "question": "The causes of DIC syndrome are",
    "options": [
      "shock",
      "leukopenia",
      "erythremia",
      "leukocytosis",
      "hypervitaminosis K"
    ],
    "answers": [
      "shock"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 30,
    "category": "Haemostasis & Blood",
    "question": "The hypocoagulation stage of DIC syndrome is mainly associated with",
    "options": [
      "an increase in the number of platelets",
      "activation of hemostasis",
      "consumption of blood coagulation factors",
      "inhibition of fibrinolysis",
      "activation of primary anticoagulants"
    ],
    "answers": [
      "consumption of blood coagulation factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 31,
    "category": "Haemostasis & Blood",
    "question": "Impaired platelet function can be observed in",
    "options": [
      "hemophilia C",
      "hemophilia A",
      "hemophilia B",
      "Glanzmann's thrombasthenia",
      "hypervitaminosis"
    ],
    "answers": [
      "Glanzmann's thrombasthenia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 32,
    "category": "Haemostasis & Blood",
    "question": "The most characteristic sign of hemophilia A",
    "options": [
      "prolongation of bleeding time",
      "prolongation of blood clotting time",
      "positive tourniquet test, pinch",
      "decrease in prothrombin time",
      "positive ethanol test"
    ],
    "answers": [
      "prolongation of blood clotting time"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 33,
    "category": "Haemostasis & Blood",
    "question": "Characteristic sign of thrombocytopenia",
    "options": [
      "prolongation of bleeding time",
      "prolongation of blood clotting time",
      "negative tourniquet test, pinch",
      "decrease in prothrombin time",
      "positive ethanol test"
    ],
    "answers": [
      "prolongation of bleeding time"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 34,
    "category": "Haemostasis & Blood",
    "question": "Bleeding in hemophilia A is caused by",
    "options": [
      "impaired vascular-platelet hemostasis",
      "impaired platelet hemostasis",
      "impaired coagulation hemostasis",
      "depletion of blood clotting factors",
      "excess of blood clotting factors"
    ],
    "answers": [
      "impaired coagulation hemostasis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 35,
    "category": "Hypoxia Studies",
    "question": "Hypoxia is",
    "options": [
      "typical pathological process",
      "pathological reaction",
      "pathological condition",
      "illness",
      "symptom complex"
    ],
    "answers": [
      "typical pathological process"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 36,
    "category": "Hypoxia Studies",
    "question": "Hypoxia, developing with a decrease in the partial pressure of oxygen in the inhaled air, is called",
    "options": [
      "exogenous",
      "hemic",
      "circulatory",
      "endogenous"
    ],
    "answers": [
      "exogenous"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 37,
    "category": "Hypoxia Studies",
    "question": "What is “hypoxia”?",
    "options": [
      "Disrupted oxygen exchange",
      "Oxygen toxicity",
      "decrease in biological oxidation, leading to depletion of ATP",
      "Reduced oxygen needs",
      "Limited aerobic capacity"
    ],
    "answers": [
      "decrease in biological oxidation, leading to depletion of ATP"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 38,
    "category": "Hypoxia Studies",
    "question": "Exogenic hypobaric hypoxia is a result of:",
    "options": [
      "Disturbance in respiratory lung function. 2",
      "Decreased pO2 in the inhaled air",
      "Damaged respiratory center",
      "Increased pO2 in the exhaled air",
      "Disorders of the respiratory muscles"
    ],
    "answers": [
      "Decreased pO2 in the inhaled air"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 39,
    "category": "Hypoxia Studies",
    "question": "Which statement refers to exogenous hypobaric hypoxia (2)?",
    "options": [
      "Respiratory system is seriously compromised",
      "Respiratory system is intact",
      "Must be accompanied by hypercapnia",
      "Dramatically reduction of hemoglobin amount",
      "respiratory alkalosis can arise"
    ],
    "answers": [
      "Respiratory system is intact",
      "respiratory alkalosis can arise"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 40,
    "category": "Hypoxia Studies",
    "question": "What is the general effect from the development of circulatory hypoxia?",
    "options": [
      "Methemoglobin reductase block",
      "Decreased ventilation/perfusion ratio",
      "Effective hemoglobin deficiency",
      "Direct mitochondrial decoupling",
      "Tissue hypoperfusion"
    ],
    "answers": [
      "Tissue hypoperfusion"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 41,
    "category": "Hypoxia Studies",
    "question": "Basic mechanisms for development of histotoxic hypoxia are:",
    "options": [
      "Increased mitochondrial oxygen reduction",
      "Decreased mitochondrial oxygen reduction",
      "Reduced efficiency of the oxygen energy production",
      "Insufficient functional energy provision"
    ],
    "answers": [
      "Decreased mitochondrial oxygen reduction",
      "Reduced efficiency of the oxygen energy production"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 42,
    "category": "Hypoxia Studies",
    "question": "Exogenous normobaric hypoxia occurs when",
    "options": [
      "climbing mountains",
      "lift in aircraft",
      "caisson works",
      "being in an unventilated room"
    ],
    "answers": [
      "being in an unventilated room"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 43,
    "category": "Hypoxia Studies",
    "question": "Exogenous hypobaric hypoxia is observed with",
    "options": [
      "being in the mines",
      "at divers",
      "in case of malfunction of anesthesia-respiratory equipment",
      "when climbing to a high altitude",
      "when sailing in submarines"
    ],
    "answers": [
      "when climbing to a high altitude"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 44,
    "category": "Haemostasis & Blood",
    "question": "Indicate a characteristic change in blood composition with exogenous hypobaric hypoxia",
    "options": [
      "hyperglycemia",
      "hypocapnia",
      "hypercapnia",
      "decrease in blood lactate",
      "hyperproteinemia"
    ],
    "answers": [
      "hypocapnia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 45,
    "category": "Haemostasis & Blood",
    "question": "Hypoxia associated with the development of disorders in the blood system is called",
    "options": [
      "exogenous",
      "circulatory",
      "tissue",
      "ischemic",
      "anemic"
    ],
    "answers": [
      "anemic"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 46,
    "category": "Hypoxia Studies",
    "question": "Carbon monoxide poisoning leads to the development of hypoxia.",
    "options": [
      "tissue",
      "anemic",
      "circulatory",
      "respiratory",
      "exogenous"
    ],
    "answers": [
      "anemic"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 47,
    "category": "Hypoxia Studies",
    "question": "Hypoxia, developing in the pathology of the cardiovascular system,",
    "options": [
      "tissue",
      "exogenous",
      "respiratory",
      "hemic",
      "circulatory"
    ],
    "answers": [
      "circulatory"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 48,
    "category": "Hypoxia Studies",
    "question": "Specify the reasons of hemic hypoxia:",
    "options": [
      "CO poisoning",
      "emphysema of lungs",
      "nitrate poisoning",
      "chronic blood loss",
      "hypovitaminosis B12",
      "a decrease in excitability of the respiratory center"
    ],
    "answers": [
      "CO poisoning",
      "nitrate poisoning",
      "chronic blood loss",
      "hypovitaminosis B12"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 49,
    "category": "Haemostasis & Blood",
    "question": "Indicate the causes of respiratory-type hypoxia:",
    "options": [
      "CO poisoning",
      "pulmonary emphysema",
      "nitrate poisoning",
      "chronic blood loss",
      "hypovitaminosis B12",
      "a decrease in the excitability of the respiratory center"
    ],
    "answers": [
      "pulmonary emphysema",
      "a decrease in the excitability of the respiratory center"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 50,
    "category": "Hypoxia Studies",
    "question": "In the pathogenesis of tissue hypoxia, it matters:",
    "options": [
      "inactivation of respiratory enzymes",
      "violation of the synthesis of respiratory enzymes",
      "dissociation of oxidation and phosphorylation",
      "damage to mitochondria",
      "reduced tissue oxygen demand"
    ],
    "answers": [
      "inactivation of respiratory enzymes",
      "violation of the synthesis of respiratory enzymes",
      "dissociation of oxidation and phosphorylation",
      "damage to mitochondria"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 51,
    "category": "Hypoxia Studies",
    "question": "The circulatory-hemic (mixed) type of hypoxia is characteristic of",
    "options": [
      "dehydration",
      "pneumonia",
      "acute blood loss",
      "hemolytic anemia",
      "carbon monoxide poisoning (CO)"
    ],
    "answers": [
      "acute blood loss"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 52,
    "category": "Hypoxia Studies",
    "question": "The most sensitive to oxygen deficiency is:",
    "options": [
      "bones",
      "muscles",
      "connective tissue",
      "structure of the nervous system",
      "kidney"
    ],
    "answers": [
      "structure of the nervous system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 53,
    "category": "Hypoxia Studies",
    "question": "Urgent compensatory reactions in hypoxia are (3):",
    "options": [
      "release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answers": [
      "release of deposited blood",
      "tachycardia",
      "hyperpnea"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 54,
    "category": "Hypoxia Studies",
    "question": "Long-term adaptation to hypoxia provides",
    "options": [
      "release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answers": [
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 55,
    "category": "Haemostasis & Blood",
    "question": "What are the mechanisms leading to an increase in oxygen capacity blood with moderate repeated hypoxia:",
    "options": [
      "increased cardiac output",
      "an increase in the formation of erythropoietin",
      "accelerating the release of red blood cells from the bone marrow into the blood",
      "an increase in the number of red blood cells in the blood",
      "increase in alveolar ventilation"
    ],
    "answers": [
      "an increase in the formation of erythropoietin",
      "accelerating the release of red blood cells from the bone marrow into the blood",
      "an increase in the number of red blood cells in the blood"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 56,
    "category": "Hypoxia Studies",
    "question": "The main pathogenetic unit of circulatory hypoxia is:",
    "options": [
      "Reduced effective hemoglobin",
      "Systolic cardiac dysfunction",
      "Reduced effective circulatory volume",
      "Decreased hematocrit",
      "Blood depots depletion"
    ],
    "answers": [
      "Reduced effective circulatory volume"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 57,
    "category": "Hypoxia Studies",
    "question": "In which hypoxia type the processes of O2 intake, transport and delivery to the cells are not disturbed?:",
    "options": [
      "Circulatory hypoxia",
      "Hypoxic hypoxia",
      "Hemic hypoxia of anemic type",
      "Overutilization hypoxia",
      "Hemic hypoxia of inactivity type"
    ],
    "answers": [
      "Hemic hypoxia of anemic type"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 58,
    "category": "Hypoxia Studies",
    "question": "Tissue hypoxia is the final result of:",
    "options": [
      "Reduced physical activity",
      "Absolute starvation",
      "Each metabolic abnormality",
      "Severe and/ or progressive systemic hypoxia"
    ],
    "answers": [
      "Severe and/ or progressive systemic hypoxia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 59,
    "category": "Haemostasis & Blood",
    "question": "Increased oxygen transporting capacity of the blood is a result of:",
    "options": [
      "Increased blood pressure",
      "Increased tissues vascularization",
      "Compensatory heart hypertrophy",
      "Compensatory diminished erithrolysis",
      "Compensatory erythropoesis"
    ],
    "answers": [
      "Compensatory erythropoesis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 60,
    "category": "Hypoxia Studies",
    "question": "Exogenous normobaric hypoxia occurs when:",
    "options": [
      "the climb in the mountains",
      "the climb in aircraft",
      "diving operations",
      "reducing the PCO2 in the air",
      "staying in unvented premises"
    ],
    "answers": [
      "staying in unvented premises"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 61,
    "category": "Haemostasis & Blood",
    "question": "A typical change in the composition of blood when exogenous normobaric hypoxia is:",
    "options": [
      "hypocapnia",
      "hypoxemia",
      "alkalosis",
      "hyperlipidemia",
      "hyperproteinemia"
    ],
    "answers": [
      "hypocapnia",
      "hypoxemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 62,
    "category": "Haemostasis & Blood",
    "question": "Indicate the characteristic change in the composition of the blood when exogenous hypobaric hypoxia:",
    "options": [
      "hyperglycemia",
      "hypocapnia",
      "hypercapnia",
      "reduction of blood lactate; hyperproteinemia"
    ],
    "answers": [
      "hypocapnia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 63,
    "category": "Haemostasis & Blood",
    "question": "Specify the changes in the blood which are characteristic for exogenous hypobaric hypoxia:",
    "options": [
      "hypercapnia",
      "hypocapnia",
      "hypoxemia",
      "gas alkalosis",
      "gas acidosis"
    ],
    "answers": [
      "hypocapnia",
      "hypoxemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 64,
    "category": "Haemostasis & Blood",
    "question": "The partial arterial oxygen pressure – 70 mm Hg, partial pressure of carbon dioxide in the arterial blood – 58 mmHg is characteristic for:",
    "options": [
      "exogenous hypobaric type of hypoxia",
      "hemic type of hypoxia",
      "tissue type of hypoxia",
      "respiratory type of hypoxia",
      "circulatory type of hypoxia"
    ],
    "answers": [
      "respiratory type of hypoxia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Haemostasis & Blood."
  },
  {
    "id": 65,
    "category": "Pathophysiology",
    "question": "In the pathogenesis of hypoxic cell damage has a value:",
    "options": [
      "an increase of the sodium in the cell",
      "activation of phospholipase",
      "release of lysosomal enzymes",
      "reduction in the intensity of lipid peroxidation",
      "accumulation of calcium in mitochondria",
      "disruption of the membrane pump systems"
    ],
    "answers": [
      "an increase of the sodium in the cell",
      "activation of phospholipase",
      "accumulation of calcium in mitochondria",
      "disruption of the membrane pump systems"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 66,
    "category": "Hypoxia Studies",
    "question": "Provide the long-term adaptation to hypoxia:",
    "options": [
      "the release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answers": [
      "hypertrophy of the respiratory muscles"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 67,
    "category": "Hypoxia Studies",
    "question": "The most sensitive to oxygen deficiency are:",
    "options": [
      "bone",
      "muscles",
      "connective tissue",
      "structures nervous system",
      "kidneys"
    ],
    "answers": [
      "structures nervous system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 68,
    "category": "Hypoxia Studies",
    "question": "Specify the emergency reactions of adaptation to hypoxia:",
    "options": [
      "an increase in alveolar ventilation",
      "mobilization of deposited blood",
      "enhancement of anaerobic glycolysis",
      "reduction of the oxyhemoglobin dissociation",
      "increase the number of mitochondria in the cell"
    ],
    "answers": [
      "an increase in alveolar ventilation",
      "mobilization of deposited blood",
      "enhancement of anaerobic glycolysis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 69,
    "category": "Hypoxia Studies",
    "question": "What changes in the cell can be considered as compensatory during hypoxia?",
    "options": [
      "lowering activity of Na/K+ and Ca2+ – ATPase",
      "activation of glycolysis",
      ") activation of phospholipase A2",
      "mobilization of glycogen",
      "activation of POL"
    ],
    "answers": [
      "lowering activity of Na/K+ and Ca2+ – ATPase",
      "activation of glycolysis",
      "mobilization of glycogen"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 70,
    "category": "Pathophysiology",
    "question": "Which defense mechanism of the respiratory system has a reflex character?",
    "options": [
      "Cough",
      "Alveolar macrophage system",
      "Mucocilliary escalator",
      "Antioxidant systems",
      "Nasopharyngeal filter"
    ],
    "answers": [
      "Cough"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 71,
    "category": "Respiratory Pathophysiology",
    "question": "The most important outcome of alveolar hypoventilation is:",
    "options": [
      "Cyanosis",
      "Increased airway resistance",
      "Dyspnea",
      "Orthopnea",
      "Respiratory acidosis"
    ],
    "answers": [
      "Respiratory acidosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 72,
    "category": "Respiratory Pathophysiology",
    "question": "What does ventilation/perfusion mismatch mean?",
    "options": [
      "Absolutely increased or decreased ventilation and blood flow in the lungs",
      "Inadequately distributed blood flow in the lungs",
      "Limited capillary blood flow during maximal inspiration",
      "Mismatch between the airflow in the lungs and capillary blood flow",
      "Discrepancy between the ventilation and perfusion in the different parts of the lung"
    ],
    "answers": [
      "Mismatch between the airflow in the lungs and capillary blood flow"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 73,
    "category": "Respiratory Pathophysiology",
    "question": "The diffusion capacity of the lungs decreases in all of the following, except one:",
    "options": [
      "Anemia",
      "Interstitial fibrosis",
      "Bullous emphysema",
      "Pulmonary edema",
      "Increased cardiac output"
    ],
    "answers": [
      "Increased cardiac output"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 74,
    "category": "Hypoxia Studies",
    "question": "Hypercapnia could be due to:",
    "options": [
      "Hyperventilation",
      "State of anxiety and excitement",
      "Hypoxic stimuli",
      "Drugs suppressing the respiratory center",
      "Increased physical activity"
    ],
    "answers": [
      "Drugs suppressing the respiratory center"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Hypoxia Studies."
  },
  {
    "id": 75,
    "category": "Respiratory Pathophysiology",
    "question": "Cyanosis in respiratory failure is mostly due to:",
    "options": [
      "Polycythemia",
      "Hypercapnia",
      "Increased fraction of reduced hemoglobin",
      "Peripheral vascular spasm",
      "Decreased dyshemoglobin"
    ],
    "answers": [
      "Increased fraction of reduced hemoglobin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 76,
    "category": "Respiratory Pathophysiology",
    "question": "Which disease is typically accompanied by chest pain while breathing:",
    "options": [
      "Pulmonary emphysema",
      "Bronchial asthma",
      "Tuberculosis",
      "Pleural impairment",
      "Pulmonary edema"
    ],
    "answers": [
      "Pleural impairment"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 77,
    "category": "Pathophysiology",
    "question": "What is characteristic for obstructive pulmonary diseases?",
    "options": [
      "Hyperventilation",
      "Decreased bronchial conductivity",
      "Increased bronchial resistance",
      "Decreased static lung volumes",
      "Decreased dynamic lung volumes"
    ],
    "answers": [
      "Decreased bronchial conductivity",
      "Increased bronchial resistance",
      "Decreased dynamic lung volumes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 78,
    "category": "Respiratory Pathophysiology",
    "question": "The pathologic characteristics of bronchial asthma includes:",
    "options": [
      "Bronchospasm, bronchial edema, viscous mucus",
      "Peribronchial and interstitial infiltrate",
      "Alveolar and peribronchial destruction. 4",
      "Recurrent bronchial epithelial necrosis",
      "Alveolar-capillary destruction"
    ],
    "answers": [
      "Bronchospasm, bronchial edema, viscous mucus"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 79,
    "category": "Pathophysiology",
    "question": "In manifested pulmonary failure the observed polycythemia is due to:",
    "options": [
      "Decreased lysis of red blood cells",
      "Increased red blood cell life",
      "Hypoxia-induced erythropoesis",
      "Dehydration and hemoconcentration",
      "Hypercapnia-dependent increased size of the red blood cells"
    ],
    "answers": [
      "Hypoxia-induced erythropoesis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 80,
    "category": "Pathophysiology",
    "question": "Restrictive ventilatory disturbance leads to:",
    "options": [
      "Cheyne-Stokes breathing",
      "Inhomogenous alveolar ventilation",
      "Decrease in the lung volumes",
      "Incomplete functional shunt",
      "Increase of the functional residual capacity"
    ],
    "answers": [
      "Decrease in the lung volumes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 81,
    "category": "Respiratory Pathophysiology",
    "question": "What is the key pathogenetic unit of pneumothorax?",
    "options": [
      "Presence of air in the mediastinum",
      "Collapse of the alveoli",
      "Increased pleural resistance",
      "Presence of air in the pleural cavity",
      "Alveolar edema"
    ],
    "answers": [
      "Presence of air in the pleural cavity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 82,
    "category": "Pathophysiology",
    "question": "What is the basic pathogenetic unit in the respiratory distress syndrome of the newborn:",
    "options": [
      "Immaturity of the surfactant",
      "Bronchiolar constriction",
      "Pleural fibrosis",
      "Alveolar edema",
      "Narrow airways"
    ],
    "answers": [
      "Immaturity of the surfactant"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 83,
    "category": "Pathophysiology",
    "question": "What is the key pathogenetic factor in the respiratory distress syndrome in adults?",
    "options": [
      "(1)",
      "Bronchospasm and laryngospasm",
      "Alveolar hyperventilation",
      "Increased permeability of the alveolocapillary membrane",
      "Pulmonary hypertension",
      "Systemic hypertension"
    ],
    "answers": [
      "Increased permeability of the alveolocapillary membrane"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 84,
    "category": "Respiratory Pathophysiology",
    "question": "All of the following could lead to acute respiratory failure, except for one:",
    "options": [
      "Respiratory muscles paralysis",
      "Acute obstruction of the airways",
      "Respiratory center suppression",
      "Anemia and polycythemia",
      "Thoracic cage damages"
    ],
    "answers": [
      "Anemia and polycythemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 85,
    "category": "Respiratory Pathophysiology",
    "question": "Central respiratory failure occurs when:",
    "options": [
      "lung pathology",
      "pathology of the internal respiration system",
      "pathology of the respiratory center",
      "pathology of the respiratory muscles",
      "with pleural pathology"
    ],
    "answers": [
      "pathology of the respiratory center"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 86,
    "category": "Respiratory Pathophysiology",
    "question": "An obstructive type of hypoventilation develops with:",
    "options": [
      "Damage to spinal cord motor neurons",
      "Limiting lung expansion during breathing",
      "Reduction of the pulmonary surface",
      "Airway obstruction",
      "Inhibition of the function of the respiratory center"
    ],
    "answers": [
      "Airway obstruction"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 87,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of respiratory failure occurs when:",
    "options": [
      "with pneumosclerosis",
      "with pneumonia",
      "with a fracture of the ribs",
      "with paralysis of the respiratory center",
      "with laryngospasm"
    ],
    "answers": [
      "with laryngospasm"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 88,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive respiratory failure develops as a result of:",
    "options": [
      "diffuse pulmonary fibrosis",
      "swelling of the airways",
      "airway obstruction",
      "spasm of the smooth muscles of the bronchi",
      "airway compression. pneumosclerosis"
    ],
    "answers": [
      "diffuse pulmonary fibrosis",
      "airway compression. pneumosclerosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 89,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation develops with: (2) a) a",
    "options": [
      "decrease in the total lumen of the bronchi",
      "restriction of lung expansion during breathing",
      "reduction of the pulmonary surface",
      "violation of patency of the airways",
      "bronchial spasm"
    ],
    "answers": [
      "restriction of lung expansion during breathing",
      "reduction of the pulmonary surface"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 90,
    "category": "Respiratory Pathophysiology",
    "question": "Asphyxia is:",
    "options": [
      "respiratory arrest. and lengthening the breath",
      "difficulty and prolongation of exhalation",
      "lung hyperventilation",
      "acute respiratory failure"
    ],
    "answers": [
      "acute respiratory failure"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 91,
    "category": "Respiratory Pathophysiology",
    "question": "Respiratory failure is characterized by:",
    "options": [
      "shortness of breath",
      "anemia",
      "cyanosis",
      "change in the pressure of O2 and CO2 in the blood",
      "change in acid-base state"
    ],
    "answers": [
      "shortness of breath",
      "cyanosis",
      "change in the pressure of O2 and CO2 in the blood",
      "change in acid-base state"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 92,
    "category": "Respiratory Pathophysiology",
    "question": "Characterize breathing with inspiratory dyspnea:",
    "options": [
      "constant amplitude",
      "difficulty and prolonged inhalation",
      "difficulty and prolonged exhalation",
      "difficulty in inhaling and exhaling"
    ],
    "answers": [
      "difficulty and prolonged inhalation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 93,
    "category": "Respiratory Pathophysiology",
    "question": "Characterize respiration during expiratory dyspnea:",
    "options": [
      "constant amplitude",
      "difficulty and prolonged inhalation",
      "difficulty and prolonged exhalation",
      "difficulty in inhaling and exhaling"
    ],
    "answers": [
      "difficulty and prolonged exhalation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 94,
    "category": "Respiratory Pathophysiology",
    "question": "In what cases does the respiratory surface of the lungs decrease?",
    "options": [
      "with increased muscle work B)",
      "pneumothorax",
      "with croupous pneumonia",
      "with significant blood loss",
      "with lung atelectasis"
    ],
    "answers": [
      "pneumothorax",
      "with croupous pneumonia",
      "with lung atelectasis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 95,
    "category": "Respiratory Pathophysiology",
    "question": "Centrogenic ventilation failure occurs when:",
    "options": [
      "lung diseases",
      "the pathology of internal breathing",
      "pathology of the respiratory center",
      "pathology of respiratory muscles",
      "pathology of pleura"
    ],
    "answers": [
      "pathology of the respiratory center"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 96,
    "category": "Pathophysiology",
    "question": "Inhibition of the respiratory center leads to:",
    "options": [
      "the diffusion form of respiratory failure",
      "ventilation form of respiratory failure",
      "perfusion form of respiratory failure",
      "obstructive type of violations of the pulmonary ventilation",
      "the valve mechanism of bronchial obstruction"
    ],
    "answers": [
      "ventilation form of respiratory failure"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 97,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of hypoventilation develops at:",
    "options": [
      "reducing of the total lumen of bronchi",
      "the restriction of unfolding of the lungs during breathing",
      "decrease in pulmonary surface",
      "impaired patency of the airway",
      "inhibition of the function of the respiratory center"
    ],
    "answers": [
      "reducing of the total lumen of bronchi",
      "impaired patency of the airway"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 98,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive respiratory failure may be due to:",
    "options": [
      "inhibition of the respiratory center",
      "pulmonary edema",
      "pulmonary emphysema",
      "spasm of smooth muscles of the diaphragm",
      "pulmonary fibrosis"
    ],
    "answers": [
      "pulmonary emphysema"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 99,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of hypoventilation occurs when:",
    "options": [
      "spasm of the bronchi and bronchioles",
      "thickening of the bronchial mucosa",
      "violation of the respiratory muscles",
      "laryngeal edema",
      "reduction of the respiratory surface of the lungs"
    ],
    "answers": [
      "spasm of the bronchi and bronchioles",
      "thickening of the bronchial mucosa",
      "laryngeal edema"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 100,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation occurs when:",
    "options": [
      "laryngeal edema",
      "hypersecretion of the bronchial mucosa",
      "spasm of bronchioles",
      "strangulation",
      "pleuritis"
    ],
    "answers": [
      "pleuritis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 101,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation develops when:",
    "options": [
      "reducing the total lumen of the bronchi",
      "restriction of the unfolding of the lungs during breathing",
      "reduction of pulmonary surface",
      "violation of patency of the airway",
      "spasm of bronchioles"
    ],
    "answers": [
      "restriction of the unfolding of the lungs during breathing",
      "reduction of pulmonary surface"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 102,
    "category": "Respiratory Pathophysiology",
    "question": "The distance for diffusion of gases can be increased:",
    "options": [
      "during hyperventilation",
      "in violation of the mechanics of breathing",
      "by increasing the number of functioning alveoli",
      "wnen fibrotic changes in the lungs",
      "the depression of the respiratory center"
    ],
    "answers": [
      "wnen fibrotic changes in the lungs"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 103,
    "category": "Respiratory Pathophysiology",
    "question": "Bradypnea is observed at:",
    "options": [
      "lowering blood pressure",
      "depression of the respiratory center",
      "heart failure",
      "hypoxia",
      "pneumonia"
    ],
    "answers": [
      "depression of the respiratory center"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 104,
    "category": "Respiratory Pathophysiology",
    "question": "Tachypnea is observed at:",
    "options": [
      "drug poisoning",
      "pneumonia",
      "edema of the larynx",
      "fever",
      "increase in blood pressure"
    ],
    "answers": [
      "drug poisoning",
      "pneumonia",
      "fever"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 105,
    "category": "Respiratory Pathophysiology",
    "question": "Periodic breathing is:",
    "options": [
      "breathing with changing the ratio between inhalation and exhalation",
      "alternating periods of breathing with periods of apnea",
      "rapid breathing",
      "breathing with varying amplitude",
      "respiratory arrest"
    ],
    "answers": [
      "alternating periods of breathing with periods of apnea"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 106,
    "category": "Respiratory Pathophysiology",
    "question": "In the pathogenesis of periodic breathing is important:",
    "options": [
      "reducing the sensitivity of the respiratory center to CO2",
      "the increased sensitivity of the respiratory center to CO2",
      "stimulation of the respiratory center",
      "the constant stimulation of inspiratory neurons of the respiratory center",
      "reduction of the respiratory surface of the lungs"
    ],
    "answers": [
      "reducing the sensitivity of the respiratory center to CO2"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 107,
    "category": "Respiratory Pathophysiology",
    "question": "Biot’s respiration is:",
    "options": [
      "the alternation of apnea with respiratory movements that are growing by depth, and then decrease",
      "the alternation of apnea with respiratory movements of the same frequency and depth",
      "deep, rare respiratory movements",
      "deep, frequent respiratory movements",
      "gradually fading respiratory movements"
    ],
    "answers": [
      "the alternation of apnea with respiratory movements of the same frequency and depth"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 108,
    "category": "Respiratory Pathophysiology",
    "question": "Cheyne-Stokes respiration – is:",
    "options": [
      "the alternation of apnea with respiratory movements that are growing by depth, and then decrease",
      "the alternation of apnea with respiratory movements of the same frequency and depth",
      "deep, rare respiratory movements",
      "deep, frequent respiratory movements",
      "gradually fading respiratory movements"
    ],
    "answers": [
      "the alternation of apnea with respiratory movements that are growing by depth, and then decrease"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 109,
    "category": "Respiratory Pathophysiology",
    "question": "Terminal breathing include breathing of:",
    "options": [
      "Biota",
      "Cheyne-Stokes",
      "external",
      "dissociated",
      "gasping"
    ],
    "answers": [
      "gasping"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Respiratory Pathophysiology."
  },
  {
    "id": 110,
    "category": "Cardiovascular Pathophysiology",
    "question": "Systolic blood pressure is elevated when it is over:",
    "options": [
      "120mmHg 2",
      "130mmHg",
      "160mmHg",
      "140mmHg",
      "150mmHg"
    ],
    "answers": [
      "140mmHg"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 111,
    "category": "Cardiovascular Pathophysiology",
    "question": "Diastolic blood pressure is elevated when it is over:",
    "options": [
      "80mmHg",
      "90mmHg",
      "95mmHg",
      "100mmHg",
      "110mmHg"
    ],
    "answers": [
      "90mmHg"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 112,
    "category": "Cardiovascular Pathophysiology",
    "question": "Which factors are able to increase systemic blood pressure?",
    "options": [
      "Stroke volume of the heart",
      "Cardiac output",
      "Total peripheral vascular resistance (TPR)",
      "Activation of depressor factors",
      "Genetically, higher extracellular volume"
    ],
    "answers": [
      "Cardiac output",
      "Total peripheral vascular resistance (TPR)"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 113,
    "category": "Cardiovascular Pathophysiology",
    "question": "Blood pressure is increased when there is:",
    "options": [
      "Prevalence of pressor mechanisms",
      "Activation of pressor and depressor factors",
      "Insuffiecient depressor factors",
      "Pressor-depressor dissociation"
    ],
    "answers": [
      "Prevalence of pressor mechanisms",
      "Insuffiecient depressor factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 114,
    "category": "Cardiovascular Pathophysiology",
    "question": "Arterial hypertension is a condition of:",
    "options": [
      "Elevated blood pressure adequate to metabolic needs",
      "Form of adaptation to generalized hyperperfusion",
      "Functionally inadequate elevated blood pressure",
      "Form of maintaining blood flow in vital organs",
      "Circulatory overcompensation"
    ],
    "answers": [
      "Functionally inadequate elevated blood pressure"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 115,
    "category": "Cardiovascular Pathophysiology",
    "question": "What is the pathogenetic classification of arterial hypertension?",
    "options": [
      "Congenital and acquired",
      "Uncompensated and overcompensated",
      "Infectious and non-infectious",
      "Essential and symptomatic"
    ],
    "answers": [
      "Essential and symptomatic"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 116,
    "category": "Cardiovascular Pathophysiology",
    "question": "Which factors play an important role in the genesis of essential hypertension?",
    "options": [
      "Acute infections",
      "Psychological traumas, 6. stress",
      "Genetic predisposition",
      "Kidney diseases"
    ],
    "answers": [
      "Psychological traumas, 6. stress",
      "Genetic predisposition"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 117,
    "category": "Cardiovascular Pathophysiology",
    "question": "The main pathogenetic unit of volume-dependent arterial hypertension is:",
    "options": [
      "(1)",
      "Decreased renal excretion of sodium and water",
      "Increased sympathetic tone",
      "Lost baroreceptor depressor mechanism",
      "Genetically, higher extracellular volume",
      "Ineffective Darrow-Yannet mechanism"
    ],
    "answers": [
      "Decreased renal excretion of sodium and water"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 118,
    "category": "Cardiovascular Pathophysiology",
    "question": "Arterial hypertension in atherosclerosis is a result of:",
    "options": [
      "Increased Na+concentration in the blood",
      "Increased release of pressor factors",
      "Reduced elasticity of the large arterial vessels",
      "Increased pressor effect of the vasomotorcenter"
    ],
    "answers": [
      "Increased Na+concentration in the blood",
      "Reduced elasticity of the large arterial vessels"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 119,
    "category": "Pathophysiology",
    "question": "The one hypertensive mechanism in hyperglucocorticism is:",
    "options": [
      "Peripheral blood vessels spasm",
      "Increased Na+and water retention in the body",
      "Sensitization of the vascular wall to pressor factors",
      "Hypertrophy of the vascular wall",
      "Altered sensitivity of stretch- and chemoreceptors"
    ],
    "answers": [
      "Increased Na+and water retention in the body",
      "Sensitization of the vascular wall to pressor factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 120,
    "category": "Pathophysiology",
    "question": "The one hypertensive mechanism in glucocorticoid excess",
    "options": [
      "is: (1)",
      "Peripheral blood vessels spasm",
      "Increased Na+and water retention in the body",
      "Stimulation of angiotensinogen secretion by the liver",
      "Hypertrophy of the vascular wall",
      "Altered sensitivity of baro- and chemoreceptors"
    ],
    "answers": [
      "Increased Na+and water retention in the body",
      "Stimulation of angiotensinogen secretion by the liver"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 121,
    "category": "Pathophysiology",
    "question": "Depressant substances include:",
    "options": [
      "Nitric oxide",
      "Angiotensin-II",
      "Aldosterone",
      "Endothelin",
      "Adrenaline"
    ],
    "answers": [
      "Nitric oxide"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 122,
    "category": "Cardiovascular Pathophysiology",
    "question": "Secondary (symptomatic) arterial hypertension is one of the symptoms of diseases:",
    "options": [
      "(1)",
      "liver",
      "gastrointestinal tract",
      "kidney",
      "spleen",
      "lungs"
    ],
    "answers": [
      "kidney"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 123,
    "category": "Cardiovascular Pathophysiology",
    "question": "Crucial in the pathogenesis of renovascular renal hypertension is",
    "options": [
      "activation of the renin-angiotensin-aldosterone system",
      "increased secretion of glucocorticoids",
      "a decrease in the production of depressant substances in the kidneys",
      "increased secretion of adrenaline",
      "increased secretion of vasopressin"
    ],
    "answers": [
      "activation of the renin-angiotensin-aldosterone system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 124,
    "category": "Cardiovascular Pathophysiology",
    "question": "The pathogenesis of primary hypertension involves:",
    "options": [
      "Persistent increased irritability and hyperergy of the higher sympathetic nerve centers",
      "Prolonged inhibition of emotional centers",
      "Increased inhibitory effect of the cerebral cortex on the pressor centers",
      "Increased production of natriuretic hormone",
      "Insufficiency of the adrenal cortex"
    ],
    "answers": [
      "Persistent increased irritability and hyperergy of the higher sympathetic nerve centers"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 125,
    "category": "Cardiovascular Pathophysiology",
    "question": "The pathogenesis of primary hypertension involves: + a) the vascular endothelium",
    "options": [
      "a defective Na+ -K+ -2Cl co-transport system in the plasma membrane",
      "excess sodium intake and renal sodium retention",
      "sympathetic nervous hyperactivity",
      "renin-angiotensin system"
    ],
    "answers": [
      "a defective Na+ -K+ -2Cl co-transport system in the plasma membrane",
      "excess sodium intake and renal sodium retention",
      "sympathetic nervous hyperactivity",
      "renin-angiotensin system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 126,
    "category": "Cardiovascular Pathophysiology",
    "question": "Orthostatic hypotension (collapse) occurs when",
    "options": [
      "massive blood loss",
      "pancreatic crush",
      "rapid decrease in oxygen in the inhaled air",
      "intestinal infections",
      "a sharp transition from horizontal to vertical"
    ],
    "answers": [
      "a sharp transition from horizontal to vertical"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 127,
    "category": "Cardiovascular Pathophysiology",
    "question": "Indicate the types of symptomatic hypertension:",
    "options": [
      "hypovolemic",
      "thyroid",
      "portal",
      "cerebro-ischemic",
      "renal",
      "essential",
      "adrenal"
    ],
    "answers": [
      "thyroid",
      "cerebro-ischemic",
      "renal",
      "adrenal"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 128,
    "category": "Cardiovascular Pathophysiology",
    "question": "The term \"arterial hypertension\" means:",
    "options": [
      "a persistent increase in blood pressure: systolic above 140 mm Hg, diastolic - 90 mm Hg",
      "increase in blood pressure: systolic above 160 mm Hg, diastolic - 95 mm Hg,",
      "normalizing immediately after the cessation of the causative factor"
    ],
    "answers": [
      "a persistent increase in blood pressure: systolic above 140 mm Hg, diastolic - 90 mm Hg"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 129,
    "category": "Cardiovascular Pathophysiology",
    "question": "Indicate the probable causes of primary hypertension:",
    "options": [
      "hyperthyroidism",
      "chronic psycho-emotional overstrain",
      "chronic nephritis",
      "repeated lingering negative emotions",
      "atherosclerotic vascular disease",
      "genetic defects of the centers of the autonomic nervous system that regulate blood pressure"
    ],
    "answers": [
      "chronic psycho-emotional overstrain",
      "repeated lingering negative emotions",
      "atherosclerotic vascular disease",
      "genetic defects of the centers of the autonomic nervous system that regulate blood pressure"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 130,
    "category": "Cardiovascular Pathophysiology",
    "question": "The risk factors for the development of hypertension include:",
    "options": [
      "hyperergic sympathetic adrenal system",
      "hyperergia of the parasympathetic system",
      "physical inactivity",
      "hyperthyroidism",
      "diabetes",
      "weight loss",
      "obesity"
    ],
    "answers": [
      "hyperergic sympathetic adrenal system",
      "physical inactivity",
      "hyperthyroidism",
      "diabetes",
      "obesity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 131,
    "category": "Cardiovascular Pathophysiology",
    "question": "Endocrine hypertension occurs when:",
    "options": [
      "total hypofunction of the adrenal cortex",
      "hyperfunction of the adrenal medulla",
      "hyperfunction of the glomerular zone of the adrenal cortex",
      "hypothyroidism",
      "pituitary cachexia",
      "thyrotoxicosis"
    ],
    "answers": [
      "hyperfunction of the adrenal medulla",
      "hyperfunction of the glomerular zone of the adrenal cortex",
      "thyrotoxicosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 132,
    "category": "Cardiovascular Pathophysiology",
    "question": "Indicate the possible consequences of chronic hypertension:",
    "options": [
      "congestive heart failure",
      "heart hypertrophy",
      "myocarditis",
      "cardiosclerosis",
      "stroke",
      "hypoaldosteronism",
      "hypertensive encephalopathy"
    ],
    "answers": [
      "congestive heart failure",
      "heart hypertrophy",
      "cardiosclerosis",
      "stroke",
      "hypertensive encephalopathy"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 133,
    "category": "Cardiovascular Pathophysiology",
    "question": "Risk factors for the development of essential hypertension are:",
    "options": [
      "overweight",
      "frequent stresses",
      "excessive salt intake",
      "active lifestyle",
      "physical inactivity"
    ],
    "answers": [
      "overweight",
      "frequent stresses",
      "excessive salt intake",
      "physical inactivity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Cardiovascular Pathophysiology."
  },
  {
    "id": 134,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Which bacterial colonization of the stomach proven is essential for gastritis and",
    "options": [
      "peptic ulcer : 1. staphylococcus aureus",
      "escherichia coli",
      "Helicobacter Pylori",
      "rickettsia conori"
    ],
    "answers": [
      "Helicobacter Pylori"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 135,
    "category": "Gastrointestinal Pathophysiology",
    "question": "What is the central unit in the pathogenesis of ulcer on the body of the",
    "options": [
      "stomach : hyperfunction of the parietal cells of the stomach",
      "duodenal reflux",
      "reduced resistance of the gastric mucosa",
      "lost",
      "neuro-humoral regulation of secretion"
    ],
    "answers": [
      "reduced resistance of the gastric mucosa"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 136,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Main stimuli for increased acid-peptic activity of the gastric juice are:",
    "options": [
      "increased tone of the vagal nerve",
      "hypergastrinaemia",
      "increased",
      "histamine secretion",
      "pepsinogen secretion"
    ],
    "answers": [
      "increased tone of the vagal nerve",
      "hypergastrinaemia",
      "histamine secretion"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 137,
    "category": "Gastrointestinal Pathophysiology",
    "question": "How will the food evacuation from the stomach change with increased secretion",
    "options": [
      "of gastric juice?",
      "will slow down",
      "will accelerate"
    ],
    "answers": [
      "will slow down"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 138,
    "category": "Gastrointestinal Pathophysiology",
    "question": "What are the manifestations of malabsorption syndrome:",
    "options": [
      "weight loss",
      "vomiting, heartburn",
      "vitamin deficiency",
      "anemia",
      "obesity",
      "immunodeficiencies"
    ],
    "answers": [
      "weight loss",
      "vitamin deficiency",
      "anemia",
      "immunodeficiencies"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 139,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Point out the main factors of damage to the gastric mucosa:",
    "options": [
      "spicy food",
      "alcohol",
      "high pepsin activity",
      "low hydrochloric acid"
    ],
    "answers": [
      "spicy food",
      "alcohol"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 140,
    "category": "Gastrointestinal Pathophysiology",
    "question": "What are the main factors that protect the gastric mucosa:",
    "options": [
      "histamine pepsin",
      "bicarbonates",
      "mucous",
      "prostaglandins E2 and F2"
    ],
    "answers": [
      "bicarbonates",
      "mucous",
      "prostaglandins E2 and F2"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 141,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Point out the main reasons of hypersalivation:",
    "options": [
      "the inflammatory process in the oral cavity and stomach",
      "stimulation of the center of salivation in the medulla oblongata",
      "fever",
      "toxicosis of pregnancy",
      "stress"
    ],
    "answers": [
      "the inflammatory process in the oral cavity and stomach",
      "stimulation of the center of salivation in the medulla oblongata",
      "toxicosis of pregnancy"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 142,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Point out the main reasons of hyposalivation (5):",
    "options": [
      "inflammation of salivary glands",
      "tumor of the salivary glands",
      "sialolithiasis",
      "dehydration",
      "toxicosis of pregnancy",
      "stress"
    ],
    "answers": [
      "inflammation of salivary glands",
      "tumor of the salivary glands",
      "sialolithiasis",
      "dehydration",
      "stress"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 143,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Indicate the main causes of chewing disorders:",
    "options": [
      "caries",
      "paradontosis",
      "inflammation in oral cavity",
      "malocclusion"
    ],
    "answers": [
      "caries",
      "paradontosis",
      "inflammation in oral cavity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 144,
    "category": "Gastrointestinal Pathophysiology",
    "question": "What are the causes of diarrhea ?",
    "options": [
      "irritation of intestinal receptors by poorly digested food",
      "the effect on the intestinal cells of poisons, toxins",
      "impaired",
      "gastric motility"
    ],
    "answers": [
      "irritation of intestinal receptors by poorly digested food",
      "the effect on the intestinal cells of poisons, toxins"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 145,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Indicate the consequences of poor chewing food:",
    "options": [
      "decresed secretion of gastric juice",
      "mechanical damage to the mucosa of the esophagus, stomach",
      "impaired gastric secretion and motility"
    ],
    "answers": [
      "mechanical damage to the mucosa of the esophagus, stomach",
      "impaired gastric secretion and motility"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 146,
    "category": "Gastrointestinal Pathophysiology",
    "question": "The main reasons for the development of malabsorption syndrome:",
    "options": [
      "atrophy of the small intestine mucosa",
      "extensive resection of the small intestine",
      "hyperacid gastritis",
      "chronic enteritis"
    ],
    "answers": [
      "atrophy of the small intestine mucosa",
      "extensive resection of the small intestine",
      "chronic enteritis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 147,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Anorexia is: 1. lack of appetite",
    "options": [
      "increased",
      "excessive appetite",
      "inability to swallow"
    ],
    "answers": [],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 148,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Dysphagia is:",
    "options": [
      "lack of appetite",
      "excessive appetite",
      "increased food intake",
      "difficulties of swallowing + Neurotic",
      "anorexia occurs with :",
      "intestinal infections",
      "diabetes",
      "negative emotions",
      "intoxication",
      "vomiting"
    ],
    "answers": [
      "difficulties of swallowing + Neurotic",
      "negative emotions"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 149,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Hyperrexia is observed with:",
    "options": [
      "diabetes",
      "intoxication",
      "pain",
      "inhibition of the food center"
    ],
    "answers": [
      "diabetes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 150,
    "category": "Gastrointestinal Pathophysiology",
    "question": "The consequences of hypersalivation include",
    "options": [
      "plaque in the language",
      "the development of inflammatory processes in the oral cavity",
      "multiple dental caries",
      "neutralization of the gastric juice"
    ],
    "answers": [
      "neutralization of the gastric juice"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 151,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Factors participating in the pathogenesis of heartburn:",
    "options": [
      "functional insufficiency of cardial sphincter",
      "lowering the acidity of gastric juice",
      "effects of certain foods and drugs + Hypokinesia of the",
      "stomach may be caused by :",
      "visceral reflexes",
      "overeating",
      "vitamin B1 deficit",
      "Impaired gastric secretion"
    ],
    "answers": [
      "functional insufficiency of cardial sphincter",
      "effects of certain foods and drugs + Hypokinesia of the",
      "visceral reflexes",
      "overeating"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 152,
    "category": "Gastrointestinal Pathophysiology",
    "question": "Examples of secretary diarrhea include:",
    "options": [
      "cholera",
      "enzymes deficiency",
      "hormones elaborated by hormone-producing tumours"
    ],
    "answers": [
      "cholera",
      "hormones elaborated by hormone-producing tumours"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 153,
    "category": "Renal Pathophysiology",
    "question": "What definition of renal failure is more correct?",
    "options": [
      "it is autointoxication of the organism that is associated primary with damage of the structural",
      "elements of the parenchyma by infectious or toxic factors",
      "it is such a change of renal function, which causes a disturbance of the state of the internal",
      "environment"
    ],
    "answers": [
      "it is such a change of renal function, which causes a disturbance of the state of the internal"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 154,
    "category": "Renal Pathophysiology",
    "question": "Specify the types of renal failure: + a) acute, chronic,",
    "options": [
      "complete, partial; b) terminal, unilateral, bilateral"
    ],
    "answers": [],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 155,
    "category": "Renal Pathophysiology",
    "question": "What form of renal failure includes renal diabetes, cystinuria,",
    "options": [
      "phosphate diabetes which are caused by inheritance of the",
      "corresponding genetic defects? a) acute",
      "terminal",
      "chronic",
      "unilateral",
      "full",
      "bilateral"
    ],
    "answers": [
      "chronic"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 156,
    "category": "Renal Pathophysiology",
    "question": "Specify the causes of acute renal failure type of “shock kidney”:",
    "options": [
      "Crush syndrome, a disease occurring with uncontrollable vomiting and profuse diarrhea,",
      "leading to dehydration",
      "poisoning by carbon tetrachloride, bilateral obstruction of the urinary",
      "tract by stones"
    ],
    "answers": [
      "Crush syndrome, a disease occurring with uncontrollable vomiting and profuse diarrhea,"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 157,
    "category": "Renal Pathophysiology",
    "question": "Specify the reasons leading to acute renal failure type of “vascular obstruction”?",
    "options": [
      "acute glomerulonephritis, thrombosis and embolism of the renal arteries; b) poisoning",
      "by vinegar essence",
      "prostate adenoma",
      "anaerobic infection"
    ],
    "answers": [],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 158,
    "category": "Renal Pathophysiology",
    "question": "Specify the reasons of acute renal failure type of “urological obstruction”? a) Crush",
    "options": [
      "syndrome",
      "unilateral blockage of the urinary tract by stones; c) anaerobic infection",
      "acute glomerulonephritis"
    ],
    "answers": [
      "unilateral blockage of the urinary tract by stones; c) anaerobic infection"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 159,
    "category": "Renal Pathophysiology",
    "question": "Specify the stages of acute renal failure:",
    "options": [
      "latent, prodromal, urogenic sepsis, uremic",
      "oligo-anuric, initial, recovery of diuresis and polyuria, reconvalescence"
    ],
    "answers": [
      "oligo-anuric, initial, recovery of diuresis and polyuria, reconvalescence"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 160,
    "category": "Renal Pathophysiology",
    "question": "What is the stage of acute renal failure syndrome is characterized by development of uremia?",
    "options": [
      "initial",
      "reconvalescence; oligo-anuric; d) prodromal",
      "recovery of diuresis and polyuria"
    ],
    "answers": [
      "reconvalescence; oligo-anuric; d) prodromal"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 161,
    "category": "Renal Pathophysiology",
    "question": "What factors reduce the filtration in the renal glomerulus?",
    "options": [
      "reducing the hydrostatic pressure in the glomerular capillaries, increasing the oncotic",
      "pressure of the blood, increasing intrarenal pressure, reduction of the filtering surface",
      "increase in hydrostatic pressure in the glomerular capillaries, decreased oncotic pressure of",
      "the blood, reducing the intrarenal pressure, increased filtration surface"
    ],
    "answers": [
      "reducing the hydrostatic pressure in the glomerular capillaries, increasing the oncotic"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 162,
    "category": "Renal Pathophysiology",
    "question": "How changes the hydrostatic pressure in the renal glomeruli when constriction of the",
    "options": [
      "renal artery and afferent arterioles? a) increases",
      "decreases"
    ],
    "answers": [
      "decreases"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 163,
    "category": "Renal Pathophysiology",
    "question": "How changes the filtration pressure when spasm of efferent arterioles?",
    "options": [
      "rises",
      "decreases"
    ],
    "answers": [
      "rises"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 164,
    "category": "Renal Pathophysiology",
    "question": "Diffuse glomerulonephritis is accompanied by:",
    "options": [
      "increased permeability of glomerular basement membrane",
      "decrease in the permeability of the glomerular basement membrane"
    ],
    "answers": [
      "increased permeability of glomerular basement membrane"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 165,
    "category": "Renal Pathophysiology",
    "question": "Acute diffuse glomerulonephritis is accompanied by increase in glomerular filtration process?",
    "options": [
      "yes",
      "no"
    ],
    "answers": [
      "no"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 166,
    "category": "Renal Pathophysiology",
    "question": "What changes reduce the hydrostatic pressure in the renal glomeruli?",
    "options": [
      "increased blood pressure, increased cardiac output, increased blood",
      "volume, increased plasma volume",
      "decreased blood pressure, decreased cardiac output, decrease in blood volume, decreased",
      "plasma volume"
    ],
    "answers": [
      "decreased blood pressure, decreased cardiac output, decrease in blood volume, decreased"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 167,
    "category": "Renal Pathophysiology",
    "question": "What factors contribute to increased water reabsorption in the renal tubules?",
    "options": [
      "increased production of ADH, increased sensitivity of epithelium of the renal tubules to",
      "ADH, increase of reabsorption of the osmotically active substances from tubules",
      "the decrease in production of ADH, reducing the sensitivity of epithelium of the renal",
      "tubules to ADH, reducing reabsorption of osmotically active substances from tubules"
    ],
    "answers": [
      "increased production of ADH, increased sensitivity of epithelium of the renal tubules to"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 168,
    "category": "Renal Pathophysiology",
    "question": "What are the factors directly related to the defeat of tubular apparatus of the kidney in acute",
    "options": [
      "renal failure?",
      "infectious-toxic, hypoxia of the nephron, action of metabolites and breakdown of tissues",
      "(myoglobin, hemoglobin, etc.)",
      "impaired renal lymph circulation, increase in intrarenal pressure"
    ],
    "answers": [
      "infectious-toxic, hypoxia of the nephron, action of metabolites and breakdown of tissues"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 169,
    "category": "Pathophysiology",
    "question": "What is determined by larger degree of decreased urine output than the degree of reduction",
    "options": [
      "of glomerular filtration at background isostenuria in oligo- anuric stage of acute renal failure?",
      "that oliguria in acute renal failure is associated not only with the change of filtration, but",
      "also with the development non-selective resorption of the ultrafiltrate of tubules",
      "that the crucial in the development of oliguria in acute renal failure belongs to a violation of",
      "resorption of the tubular ultrafiltrate"
    ],
    "answers": [
      "that oliguria in acute renal failure is associated not only with the change of filtration, but"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 170,
    "category": "Renal Pathophysiology",
    "question": "What factors reduce renal blood flow in the early stages of the action of nephrotic poisons?",
    "options": [
      "reduction in energy production in the cells of tubular epithelium",
      "reduction of tubular sodium reabsorption",
      "an increase in renin production",
      "increasing the tonus of afferent arterioles of renal glomeruli",
      "all of the right"
    ],
    "answers": [
      "all of the right"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 171,
    "category": "Renal Pathophysiology",
    "question": "What factors can cause anuria?",
    "options": [
      "severe trauma, significant pain stimuli, bend or compression of the ureters",
      "denervation of the kidney, a drop of hydrostatic pressure in glomerular capillaries up to 50",
      "mm Hg"
    ],
    "answers": [
      "severe trauma, significant pain stimuli, bend or compression of the ureters"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 172,
    "category": "Pathophysiology",
    "question": "What factors can cause a hyponatriuresis?",
    "options": [
      "increase in glomerular filtration rate, a decrease in aldosterone",
      "production, reducing the sensitivity of cells of the tubules to the aldosterone",
      "increased production of aldosterone, decrease in glomerular filtration rate, an increase in",
      "the sensitivity of cells of the tubules to the aldosterone"
    ],
    "answers": [
      "increased production of aldosterone, decrease in glomerular filtration rate, an increase in"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 173,
    "category": "Renal Pathophysiology",
    "question": "What changes lead to a decrease in sodium reabsorption in the renal tubules?",
    "options": [
      "decrease in glomerular filtration rate",
      "increase in glomerular filtration rate",
      "increased production of aldosterone",
      "decrease in aldosterone production",
      "increase in the sensitivity of cells of the tubules to the aldosterone"
    ],
    "answers": [
      "decrease in aldosterone production"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 174,
    "category": "Renal Pathophysiology",
    "question": "The combination of hypostenuria with polyuria indicates on the primary lesion of the",
    "options": [
      "nephron structures, such as: a) glomerulus",
      "tubules"
    ],
    "answers": [
      "tubules"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 175,
    "category": "Pathophysiology",
    "question": "Reducing the elimination from the body of the urea and creatinine leads to:",
    "options": [
      "hyperasotemia",
      "diselectrolytemia",
      "acidosis"
    ],
    "answers": [
      "hyperasotemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 176,
    "category": "Renal Pathophysiology",
    "question": "What violations of plasma are typical for oligo-anuric stage of acute renal failure?",
    "options": [
      "hypernatremia, hypokalemia, hypomagnesemia",
      "hyponatremia, hyperkalemia, hypermagnesemia"
    ],
    "answers": [
      "hyponatremia, hyperkalemia, hypermagnesemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 177,
    "category": "Renal Pathophysiology",
    "question": "Hyperkalemia in acute renal failure is associated with violation of processes such as:",
    "options": [
      "filtration and reabsorption of potassium, reabsorption and secretion of",
      "potassium, increased protein anabolism processes",
      "filtration and secretion of potassium, increased protein catabolism"
    ],
    "answers": [
      "filtration and secretion of potassium, increased protein catabolism"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 178,
    "category": "Pathophysiology",
    "question": "What are the factors associated with the development of hyponatremia in the third stage of",
    "options": [
      "acute renal failure?",
      "increasing sodium excretion from the body, thinning (hemodilution) of blood, increased",
      "transition sodium from the extracellular space into the cell",
      "sharp drop of its filtration in third stage of acute renal failure, output of sodium from cells to",
      "the extracellular space, delay of potassium in the body"
    ],
    "answers": [
      "increasing sodium excretion from the body, thinning (hemodilution) of blood, increased"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 179,
    "category": "Renal Pathophysiology",
    "question": "Hyponatremia in acute renal failure leads to:",
    "options": [
      "intracellular dehydration",
      "intracellular hyperhydration"
    ],
    "answers": [
      "intracellular hyperhydration"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 180,
    "category": "Renal Pathophysiology",
    "question": "What is the reason of hyponatremia in chronic renal failure?",
    "options": [
      "decrease in the sensitivity of the epithelium to the ADH, decrease in the rate of filtration of",
      "sodium in functioning glomeruli",
      "decrease in the sensitivity of the epithelium to the aldosterone, increased filtration rate of",
      "sodium in the functioning glomeruli"
    ],
    "answers": [
      "decrease in the sensitivity of the epithelium to the aldosterone, increased filtration rate of"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 181,
    "category": "Renal Pathophysiology",
    "question": "Can extra- as well as intracellular hyperhydration develop when acute renal failure and chronic renal failure?",
    "options": [
      "yes",
      "no"
    ],
    "answers": [
      "yes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 182,
    "category": "Renal Pathophysiology",
    "question": "What is the reason of the acidosis in renal failure?",
    "options": [
      "reduction in the secretion of hydrogen ions in the tubules, decrease in filtration of",
      "phosphates, increased loss of bicarbonates",
      "increased secretion of hydrogen ions in the tubules, increased filtration",
      "of phosphates, decreased excretion of bicarbonates"
    ],
    "answers": [
      "reduction in the secretion of hydrogen ions in the tubules, decrease in filtration of"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 183,
    "category": "Gastrointestinal Pathophysiology",
    "question": "What accounts for dyspepsia (loss of appetite, nausea, vomiting, diarrhea) in chronic",
    "options": [
      "renal failure and uremia? a) acidosis",
      "diselectrolytemia, increased formation of ammonia in the gut"
    ],
    "answers": [
      "diselectrolytemia, increased formation of ammonia in the gut"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Gastrointestinal Pathophysiology."
  },
  {
    "id": 184,
    "category": "Renal Pathophysiology",
    "question": "Uremia is characterized by:",
    "options": [
      "anemia, leukocytosis, thrombocytopenia, hypocalcemia",
      "polycythemia, leukopenia, increase of platelets per unit volume of blood, hypercalcemia"
    ],
    "answers": [
      "anemia, leukocytosis, thrombocytopenia, hypocalcemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 185,
    "category": "Renal Pathophysiology",
    "question": "Specify the reasons of the prerenal form of acute renal failure:",
    "options": [
      "cardiogenic shock",
      "acute glomerulonephritis",
      "thrombosis and embolism of renal vessels",
      "acute pyelonephritis"
    ],
    "answers": [
      "cardiogenic shock"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 186,
    "category": "Renal Pathophysiology",
    "question": "How changes the diuresis with a decrease in reabsorption of glucose in the renal tubules?",
    "options": [
      "rises",
      "decreases"
    ],
    "answers": [
      "rises"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 187,
    "category": "Renal Pathophysiology",
    "question": "The tubular acidosis is a consequence of changes in the function of the nephron:",
    "options": [
      "glomerular filtration",
      "tubular secretion",
      "tubular reabsorption"
    ],
    "answers": [
      "tubular secretion"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 188,
    "category": "Renal Pathophysiology",
    "question": "How changes filtration when selective increase in tonus efferent arterioles of renal glomeruli?",
    "options": [
      "is incremented",
      "decreases"
    ],
    "answers": [
      "is incremented"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 189,
    "category": "Renal Pathophysiology",
    "question": "How changes the hydrostatic pressure in capillaries of the renal glomeruli when increases",
    "options": [
      "in tonus of afferent arterioles?",
      "increases",
      "decreases"
    ],
    "answers": [
      "decreases"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 190,
    "category": "Renal Pathophysiology",
    "question": "How changes the diuresis when decreases of reabsorption of glucose in the renal tubules?",
    "options": [
      "is incremented",
      "decreases"
    ],
    "answers": [
      "is incremented"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 191,
    "category": "Renal Pathophysiology",
    "question": "What is the leading pathogenetic factor of prerenal form of acute renal failure?",
    "options": [
      "inhibition of systemic hemodynamics",
      "primary damage of the nephron",
      "difficulty of removing of urine from urinary tract"
    ],
    "answers": [
      "inhibition of systemic hemodynamics"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 192,
    "category": "Renal Pathophysiology",
    "question": "Which are pathogenetic factors lead to reduction of renal blood flow in the development of",
    "options": [
      "prerenal form of acute renal failure?",
      "hypervolemia, lowering tonus of afferent arterioles",
      "hypovolemia, increased tonus of afferent arterioles, violation of hemorheological",
      "properties of blood"
    ],
    "answers": [
      "hypovolemia, increased tonus of afferent arterioles, violation of hemorheological"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Renal Pathophysiology."
  },
  {
    "id": 193,
    "category": "Endocrine Pathophysiology",
    "question": "Indicate the correct variant of transhypophysial regulation of the endocrine",
    "options": [
      "glands: (1)",
      "the cerebral cortex is the peripheral gland",
      "cortex - hypothalamus-pituitary gland - peripheral gland",
      "the cerebral cortex - the hypothalamus - nerve conductors - peripheral glands",
      "cortex - pituitary gland - hypothalamus - peripheral gland",
      "subcortical centers - nerve conduits - peripheral gland"
    ],
    "answers": [
      "cortex - hypothalamus-pituitary gland - peripheral gland"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 194,
    "category": "Endocrine Pathophysiology",
    "question": "Transhypophysial regulation is fundamental to:",
    "options": [
      "pancreas",
      "thyroid gland",
      "gonads",
      "parathyroid glands 5. adrenal cortex"
    ],
    "answers": [
      "thyroid gland",
      "gonads",
      "parathyroid glands 5. adrenal cortex"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 195,
    "category": "Endocrine Pathophysiology",
    "question": "Hormone metabolism is impaired in diseases of:",
    "options": [
      "liver",
      "the spleen",
      "hearts",
      "lungs",
      "nervous system"
    ],
    "answers": [
      "liver"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 196,
    "category": "Endocrine Pathophysiology",
    "question": "Peripheral (non-glandular) mechanism of hormone activity disturbance is:",
    "options": [
      "(1)",
      "deficiency of substrates for the formation of hormones",
      "inherited defect of hormone biosynthesis enzymes",
      "adenoma of the neurosecretory cells of the hypothalamus",
      "congenital malformations of the glands",
      "blockade of hormonal receptors"
    ],
    "answers": [
      "blockade of hormonal receptors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 197,
    "category": "Endocrine Pathophysiology",
    "question": "With eosinophilic pituitary adenoma, during the growth period of the body, it",
    "options": [
      "develops: (1) 1. acromegaly",
      "gigantism",
      "dysplasia",
      "pituitary dwarfism",
      "Itsenko-Cushing's diseas5"
    ],
    "answers": [
      "gigantism"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 198,
    "category": "Endocrine Pathophysiology",
    "question": "A decrease in the production of adrenocorticotropic hormone leads to:",
    "options": [
      "a decrease in insulin synthesis",
      "decrease the synthesis of hormones of the adrenal cortex",
      "decrease the synthesis of hormones of the adrenal medulla",
      "increased synthesis of thyroid hormones",
      "increased synthesis of sex hormones"
    ],
    "answers": [
      "decrease the synthesis of hormones of the adrenal cortex"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 199,
    "category": "Endocrine Pathophysiology",
    "question": "Excessive production of adrenocorticotropic hormone leads to increased",
    "options": [
      "secretion: (1)",
      "insulin",
      "parathyroid hormon5",
      "thyroxin5",
      "cortisol"
    ],
    "answers": [
      "cortisol"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 200,
    "category": "Endocrine Pathophysiology",
    "question": "Hypoproduction of growth hormone at a young age manifests itself in the",
    "options": [
      "form: (1) 1. acromegaly",
      "pituitary cachexia",
      "adiposogenital dystrophy",
      "pituitary gigantism",
      "pituitary dwarfism"
    ],
    "answers": [
      "pituitary dwarfism"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 201,
    "category": "Endocrine Pathophysiology",
    "question": "The development of diabetes insipidus is due to:",
    "options": [
      "hypersecretion of vasopressin",
      "hyposecretion of vasopressin",
      "hypersecretion of aldosterone",
      "the presence of insulin antagonists in the blood"
    ],
    "answers": [
      "hyposecretion of vasopressin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 202,
    "category": "Endocrine Pathophysiology",
    "question": "The cause of Addison's disease is most often:",
    "options": [
      "hypertrophy of the adrenal glands",
      "adrenal atrophy",
      "pituitary tumor",
      "autoimmune thyroiditis",
      "pineal gland hyperplasia"
    ],
    "answers": [
      "adrenal atrophy"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 203,
    "category": "Pathophysiology",
    "question": "With insufficient iodine in food develops:",
    "options": [
      "autoimmune thyroiditis",
      "hyperthyroidism",
      "hypoparathyroidism",
      "endemic goiter diffuse toxic goiter"
    ],
    "answers": [
      "endemic goiter diffuse toxic goiter"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 204,
    "category": "Endocrine Pathophysiology",
    "question": "In severe cases, hypothyroidism in adults provides development:",
    "options": [
      "cretinism",
      "myxedema",
      "eunuchoidism",
      "dwarf dwarfism",
      "hypergonadism"
    ],
    "answers": [
      "myxedema"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 205,
    "category": "Endocrine Pathophysiology",
    "question": "Hypoparathyroidism occurs with pathology:",
    "options": [
      "gonads",
      "thyroid gland",
      "parathyroid glands",
      "thymus gland",
      "pancreas"
    ],
    "answers": [
      "parathyroid glands"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 206,
    "category": "Endocrine Pathophysiology",
    "question": "Which endocrine disorder is defined as secondary/tertiary?",
    "options": [
      "pathological process in a certain endocrine gland",
      "it is a result of an increased releasing factors level",
      "it is a result of an impaired tropic hormones regulation",
      "it is a result of genetic defect in the gland"
    ],
    "answers": [
      "it is a result of an increased releasing factors level",
      "it is a result of an impaired tropic hormones regulation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 207,
    "category": "Endocrine Pathophysiology",
    "question": "Tachycardia in hyperthyroidism is a result of:",
    "options": [
      "blocked parasympathetic activation",
      "increased cardiac afterload",
      "decreased cardiac preload",
      "increased sympathetic activation",
      "malignant hyperthermia"
    ],
    "answers": [
      "increased sympathetic activation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 208,
    "category": "Pathophysiology",
    "question": "The pathogenesis of chronic hypocorticism is associated with decreased levels",
    "options": [
      "of: (2)",
      "GCS",
      "MCS",
      "suprarenal sex hormones",
      "catecholamines"
    ],
    "answers": [
      "GCS",
      "MCS"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 209,
    "category": "Pathophysiology",
    "question": "The biological effects of STH could be diminished in a deficiency of:",
    "options": [
      "somatostatins",
      "somatoliberins",
      "somatomedins",
      "prostaglandins",
      "leukotriens"
    ],
    "answers": [
      "somatoliberins"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Pathophysiology."
  },
  {
    "id": 210,
    "category": "Endocrine Pathophysiology",
    "question": "What is the cause of primary diabetes insipidus?",
    "options": [
      "damage in the hypothalamus and hypophysis",
      "hereditary defect of the adh receptors in the renal tubules",
      "acquired defect of the adh receptors in the renal tubules",
      "hyperplasia of the epiphysis",
      "atrophy in substantia nigra"
    ],
    "answers": [
      "damage in the hypothalamus and hypophysis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 211,
    "category": "Endocrine Pathophysiology",
    "question": "Pheochromocytoma leads to:",
    "options": [
      "elevated catecholamines",
      "elevated aldosterone",
      "increased level of tropic hormones",
      "decreased level of catecholamines",
      "overactivated parasympathetic nervous system"
    ],
    "answers": [
      "elevated catecholamines"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 212,
    "category": "Endocrine Pathophysiology",
    "question": "In primary hyperaldosteronism:",
    "options": [
      "aldosterone does not affect renin secretion",
      "there is increased level of aldosterone and increased level of renin",
      "there is decreased level of aldosterone and decreased level of renin",
      "there is increased level of aldosterone and decreased level of renin",
      "aldosterone augments the circadian rhythm of renin secretion"
    ],
    "answers": [
      "there is increased level of aldosterone and decreased level of renin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 213,
    "category": "Endocrine Pathophysiology",
    "question": "What signs are characteristic of severe hypothyroidism in adults?",
    "options": [
      "obesity",
      "sweating",
      "slowed intellectual and motor activity",
      "arterial hypertension",
      "fatigue",
      "tachycardia",
      "hypercholesterolemia"
    ],
    "answers": [
      "obesity",
      "slowed intellectual and motor activity",
      "fatigue",
      "hypercholesterolemia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 214,
    "category": "Endocrine Pathophysiology",
    "question": "Indicate the possible causes of hyperthyroidism:",
    "options": [
      "the lack of thyroliberin",
      "excess TTH",
      "excess immunoglobulins TSIg (LATS)",
      "thyroiditis",
      "thyroid adenoma",
      "weak transport connection with blood proteins",
      "intensive conversion of T4 to T3 in ‘target’ cells",
      "the increase in the number of receptors T3, T4"
    ],
    "answers": [
      "excess TTH",
      "excess immunoglobulins TSIg (LATS)",
      "thyroid adenoma",
      "weak transport connection with blood proteins",
      "intensive conversion of T4 to T3 in ‘target’ cells",
      "the increase in the number of receptors T3, T4"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 215,
    "category": "Endocrine Pathophysiology",
    "question": "Is it true that hyperthyroidism can be autoimmune?",
    "options": [
      "Yes",
      "No"
    ],
    "answers": [
      "Yes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 216,
    "category": "Endocrine Pathophysiology",
    "question": "Indicate the main manifestations of hyperthyroidism:",
    "options": [
      "increased basal metabolic rate",
      "the tendency to hyperthermia",
      "bradycardia",
      "nervousness",
      "hypoglycemia",
      "hypercholesterolemia",
      "systolic hypertension",
      "weight loss",
      "intolerance and sweating warm"
    ],
    "answers": [
      "increased basal metabolic rate",
      "the tendency to hyperthermia",
      "nervousness",
      "systolic hypertension",
      "weight loss",
      "intolerance and sweating warm"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 217,
    "category": "Endocrine Pathophysiology",
    "question": "Indicate the possible causes of hypothyroidism:",
    "options": [
      "excess ACTH",
      "excess thyroliberin",
      "iodine deficiency",
      "toxic blockade of iodine uptake and tyrosine compounds",
      "surgical or radioiodine ablation of the thyroid gland",
      "autoimmune thyroiditis",
      "immunoglobulin deficiency",
      "circulating cytotoxic antithyroid antibodies"
    ],
    "answers": [
      "iodine deficiency",
      "toxic blockade of iodine uptake and tyrosine compounds",
      "surgical or radioiodine ablation of the thyroid gland",
      "autoimmune thyroiditis",
      "circulating cytotoxic antithyroid antibodies"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 218,
    "category": "Endocrine Pathophysiology",
    "question": "Violations of transpituitary regulation are the basis of changes in production of",
    "options": [
      "insulin",
      "glucagon",
      "parathyrin",
      "catecholamines",
      "thyroid hormones"
    ],
    "answers": [
      "thyroid hormones"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 219,
    "category": "Endocrine Pathophysiology",
    "question": "For thyrotoxicosis, the following set of symptoms is characteristic:",
    "options": [
      "exophthalmos, cold skin, tachycardia",
      "periorbital edema, tachycardia, muscle weakness",
      "exophthalmos, tachycardia, increased basal metabolic rate",
      "inhibition, hot skin, hypotension",
      "sweating, fine tremor, shaky handwriting, clumsiness",
      "hyperthermia, constipation, memory loss",
      "hyperthermia, diarrhea, arterial hypertension"
    ],
    "answers": [
      "exophthalmos, tachycardia, increased basal metabolic rate",
      "sweating, fine tremor, shaky handwriting, clumsiness",
      "hyperthermia, diarrhea, arterial hypertension"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 220,
    "category": "Endocrine Pathophysiology",
    "question": "For hypothyroidism, the following set of symptoms is characteristic:",
    "options": [
      "coldness, slowing down of the basal metabolic rate, constipation",
      "inhibition, hot skin, hypetension",
      "cerebral ataxia, cold skin, bradycardia",
      "arterial hypotension, sweating, irritability",
      "decreased intelligence, hyperthermia, diarrhea",
      "hypothermia, decreased memory, constipation",
      "decreased memory, muscle weakness, periorbital puffiness"
    ],
    "answers": [
      "coldness, slowing down of the basal metabolic rate, constipation",
      "cerebral ataxia, cold skin, bradycardia",
      "hypothermia, decreased memory, constipation",
      "decreased memory, muscle weakness, periorbital puffiness"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 221,
    "category": "Endocrine Pathophysiology",
    "question": "Metabolism of hormones is disrupted in diseases by",
    "options": [
      "liver",
      "the spleen",
      "heart",
      "lungs",
      "nervous system"
    ],
    "answers": [
      "liver"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 222,
    "category": "General Pathology",
    "question": "Hypoproteinemia is accompanied by",
    "options": [
      "an increase in the fraction of free hormone and increasing their effects",
      "an increase in the fraction of free hormone and a decrease in their effects",
      "a decrease in the fraction of free hormone and a decrease in their effects",
      "a decrease in the fraction of free hormone and an increase in their effects",
      "the perverse effect of hormones"
    ],
    "answers": [
      "an increase in the fraction of free hormone and increasing their effects"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 223,
    "category": "Endocrine Pathophysiology",
    "question": "The peripheral (outside glandular) breaking mechanism of activity of hormones",
    "options": [
      "are:",
      "deficiency of substrates for the formation of hormones",
      "hereditary defect of enzymes for biosynthesis of hormones",
      "adenoma of neurosecretory cells of the hypothalamus",
      "congenital anomalies of development of glands",
      "the blockade of hormone receptors"
    ],
    "answers": [
      "the blockade of hormone receptors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 224,
    "category": "Endocrine Pathophysiology",
    "question": "When eosinophilic pituitary adenoma during the period of growth the",
    "options": [
      "organism develops",
      "acromegaly",
      "gigantism",
      "dysplasia",
      "pituitary dwarfism",
      "Itsenko-Cushing’s diseas"
    ],
    "answers": [
      "gigantism"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 225,
    "category": "General Pathology",
    "question": "The sudden cancellation of long-term corticosteroid therapy leads to",
    "options": [
      "insufficiency of:",
      "parathyroid hormone",
      "growth hormone",
      "epinephrine",
      "ACTH"
    ],
    "answers": [
      "ACTH"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 226,
    "category": "Endocrine Pathophysiology",
    "question": "Antidiuretic hormone deficiency is characterized by:",
    "options": [
      "polyuria, hypostenuria, polydipsia",
      "polyuria, hyperstenuria, polydipsia",
      "oliguria, edema",
      "glycosuria, polyuria, polydipsia",
      "oliguria,",
      "proteinuria, hematuria"
    ],
    "answers": [
      "polyuria, hypostenuria, polydipsia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 227,
    "category": "General Pathology",
    "question": "The excitation of the central nervous system, high blood pressure,",
    "options": [
      "hyperglycemia, osteoporosis, lymphocytolysis are observed at",
      "hyperproduction of:",
      "melanostimulating hormone",
      "parathyroid hormone",
      "sex hormones",
      "lucocorticosteroids",
      "catecholamines"
    ],
    "answers": [
      "lucocorticosteroids"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 228,
    "category": "Endocrine Pathophysiology",
    "question": "Cause Addison’s disease most often",
    "options": [
      "adrenal hypertrophy",
      "adrenal atrophy",
      "pituitary tumor",
      "autoimmune thyroiditis",
      "hyperplasia epiphysis"
    ],
    "answers": [
      "adrenal atrophy"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 229,
    "category": "Endocrine Pathophysiology",
    "question": "In severe cases of hypothyroidism in adults arises",
    "options": [
      "cretinism",
      "myxedema",
      "eunuch syndrome",
      "dwarfism",
      "hypergonadism"
    ],
    "answers": [
      "cretinism",
      "myxedema"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 230,
    "category": "Endocrine Pathophysiology",
    "question": "Hypoparathyroidism occurs when the pathology of",
    "options": [
      "the gonads",
      "thyroid gland",
      "parathyroid glands",
      "thymus 5. pancreas"
    ],
    "answers": [
      "parathyroid glands"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 231,
    "category": "Endocrine Pathophysiology",
    "question": "When insulin deficiency hyperglycemia is caused by:",
    "options": [
      "decreased glucose utilization by tissues",
      "an increase in hepatic glucose production (gluconeogenesis)",
      "an increase in lipogenesis",
      "all mentioned factors"
    ],
    "answers": [
      "decreased glucose utilization by tissues",
      "an increase in hepatic glucose production (gluconeogenesis)"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 232,
    "category": "Endocrine Pathophysiology",
    "question": "In which cases increased secretion of aldosterone?",
    "options": [
      "decrease in volume of circulating blood",
      "an increase in volume of circulating blood",
      "hyponatremia and hyperkalemia",
      "hypernatremia and hypokalemia",
      "increased activity of the renin-angiotensin system"
    ],
    "answers": [
      "decrease in volume of circulating blood",
      "hyponatremia and hyperkalemia",
      "increased activity of the renin-angiotensin system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 233,
    "category": "Endocrine Pathophysiology",
    "question": "Enlargement of the thyroid gland, exophthalmus, increase of basal",
    "options": [
      "metabolism and heat production, tachycardia, increased mental excitability are",
      "characteristic:",
      "diabetes mellitus",
      "hypothyroidism",
      "Addison’s disease",
      "Basedow’s disease",
      "Cushing’s diseas"
    ],
    "answers": [
      "Basedow’s disease"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 234,
    "category": "Endocrine Pathophysiology",
    "question": "Conn’s syndrome (primary aldosteronism) is manifested by",
    "options": [
      "loss of sodium and potassium delay",
      "the retention of sodium and loss of potassium",
      "oliguria",
      "hypotension",
      "accumulation of hydrogen ions"
    ],
    "answers": [
      "the retention of sodium and loss of potassium"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Endocrine Pathophysiology."
  },
  {
    "id": 235,
    "category": "General Pathology",
    "question": "If not enough iodine in the diet develops:",
    "options": [
      "autoimmune thyroiditis",
      "hyperthyroidism",
      "hypoparathyroidism",
      "endemic goiter",
      "diffuse toxic goiter"
    ],
    "answers": [
      "endemic goiter"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 236,
    "category": "Reactivity & Resistance",
    "question": "Sunstroke occurs during action of (1):",
    "options": [
      "high ambient temperature",
      "sunlight on an uncovered head",
      "sun rays on a human body protected by clothing",
      "visible rays of the solar spectrum",
      "infrared rays"
    ],
    "answers": [
      "sunlight on an uncovered head"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 237,
    "category": "Reactivity & Resistance",
    "question": "The greatest resistance to electric current has (1):",
    "options": [
      "skin",
      "muscles",
      "bones",
      "blood"
    ],
    "answers": [
      "skin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 238,
    "category": "Reactivity & Resistance",
    "question": "The trigger mechanism in the pathogenesis of traumatic shock is:",
    "options": [
      "pain irritation",
      "inflammation",
      "toxemia",
      "septicopyemia",
      "vascular permeability increase"
    ],
    "answers": [
      "pain irritation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 239,
    "category": "Reactivity & Resistance",
    "question": "The main factor in the development of altitude sickness is:",
    "options": [
      "high barometric pressure",
      "reduced partial pressure of oxygen in the air",
      "ultraviolet radiation",
      "infrared rays",
      "low temperature"
    ],
    "answers": [
      "reduced partial pressure of oxygen in the air"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 240,
    "category": "Reactivity & Resistance",
    "question": "The pathogenesis of cyanosis in high-altitude disease is due to excess blood levels",
    "options": [
      "(1):",
      "oxyhemoglobin",
      "carbhemoglobin",
      "carboxyhemoglobin",
      "deoxyhemoglobin",
      "methemoglobin"
    ],
    "answers": [
      "deoxyhemoglobin"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 241,
    "category": "General Pathology",
    "question": "The role of environmental factors in the origin of diseases:",
    "options": [
      "environmental factor may be the cause of the disease",
      "environmental factor may be a condition of the disease",
      "environmental factor is not a condition of the disease",
      "environmental factor can not be the cause of the disease",
      "environmental factors may be the cause and condition of disease"
    ],
    "answers": [
      "environmental factor may be the cause of the disease",
      "environmental factor may be a condition of the disease",
      "environmental factors may be the cause and condition of disease"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 242,
    "category": "General Pathology",
    "question": "Defensive-compensatory",
    "options": [
      "reactions in case of hypothermia:",
      "decreasing of sweating",
      "spasm of the peripheral vessels",
      "rising of the thermoisolation qualities",
      "increasing of the contraction thermogenesis",
      "increasing of the uncontractive thermogenesis",
      "vasodilation"
    ],
    "answers": [
      "decreasing of sweating",
      "spasm of the peripheral vessels",
      "rising of the thermoisolation qualities",
      "increasing of the contraction thermogenesis",
      "increasing of the uncontractive thermogenesis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 243,
    "category": "Reactivity & Resistance",
    "question": "Defensive-compensatory reactions in case of hyperthermia:",
    "options": [
      "increasing of the uncontractive thermogenesis",
      "extension of the peripheral vessels",
      "spasm of the peripheral vessels",
      "increasing of sweating",
      "position change"
    ],
    "answers": [
      "extension of the peripheral vessels",
      "increasing of sweating",
      "position change"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 244,
    "category": "Reactivity & Resistance",
    "question": "There are several stages of the burn disease:",
    "options": [
      "burn shock",
      "burn toxemia",
      "anxiety stage",
      "burn infection",
      "stage of hypertrophy",
      "burn exhausting",
      "outcome"
    ],
    "answers": [
      "burn shock",
      "burn toxemia",
      "burn infection",
      "burn exhausting",
      "outcome"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 245,
    "category": "General Pathology",
    "question": "When do people suffer from the effect of the high atmosphere pressure?",
    "options": [
      "water diving",
      "when oxygen is consumed by combustion in closed space",
      "when decreases a percentage of oxygen in inhaled air",
      "finding of people in small or is badly ventilated place (coal mine, elevator)",
      "in high altitude"
    ],
    "answers": [
      "water diving"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 246,
    "category": "Reactivity & Resistance",
    "question": "Causes of decompression disease:",
    "options": [
      "occurs upon rapid return from elevated atmospheric pressure to a normal atmosphere",
      "occurs in case of quick shift of the atmosphere pressure from normal to low",
      "when decreases a percentage of oxygen in inhaled air",
      "when decreases the environmental temperature"
    ],
    "answers": [
      "occurs upon rapid return from elevated atmospheric pressure to a normal atmosphere"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 247,
    "category": "Reactivity & Resistance",
    "question": "Causes of bursting decompression:",
    "options": [
      "occurs upon rapid return from elevated atmospheric pressure to a normal atmosphere",
      "occurs in case of quick shift of the atmosphere pressure from normal to low",
      "when decreases a percentage of oxygen in inhaled air",
      "when decreases the environmental temperature"
    ],
    "answers": [
      "occurs in case of quick shift of the atmosphere pressure from normal to low"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 248,
    "category": "Reactivity & Resistance",
    "question": "Burn exhausting is characterized by:",
    "options": [
      "dystrophic changes in the inner organs",
      "progressive cachexia",
      "anemia",
      "insufficiency of the adrenal gland",
      "edema",
      "hyperhydration",
      "decreases viscosity of the blood"
    ],
    "answers": [
      "dystrophic changes in the inner organs",
      "progressive cachexia",
      "anemia",
      "insufficiency of the adrenal gland",
      "edema"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 249,
    "category": "General Pathology",
    "question": "Pathological physiology studies",
    "options": [
      "structural features",
      "functions of the main systems and organs",
      "metabolic processes in the body",
      "manifestations of disease",
      "functional activity of defective organ and other organs and systems in a sick organism",
      "mechanisms of disease development and methods of treatment"
    ],
    "answers": [
      "mechanisms of disease development and methods of treatment"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 250,
    "category": "General Pathology",
    "question": "The main in pathophysiologic experiment is:",
    "options": [
      "modeling of human disease in animals",
      "study of functional indicators",
      "the study of morphological indicators",
      "the study of biochemical parameters",
      "the study of clinical indicators of the disease"
    ],
    "answers": [
      "modeling of human disease in animals"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 251,
    "category": "General Pathology",
    "question": "The main factor limiting the application of the experimental method in medicine is:",
    "options": [
      "difference in the structure of animals and humans",
      "difference in the characteristics of metabolism in animals and humans",
      "different life spans of humans and animals",
      "difficulties in determining the initial level of health in experimental animals",
      "The social nature of man"
    ],
    "answers": [
      "The social nature of man"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 252,
    "category": "General Pathology",
    "question": "Disease is:",
    "options": [
      "unusual reaction of the body to any effect",
      "combination of damage phenomena and protective-adaptive reactions in damaged tissues",
      "organs or the body",
      "persistent deviation from the norm not having adaptive value for the body",
      "life of a sick organism in condition under the compensation of the impaired functions"
    ],
    "answers": [
      "life of a sick organism in condition under the compensation of the impaired functions"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 253,
    "category": "General Pathology",
    "question": "Disease is characterized by:",
    "options": [
      "state of complete physical mental and social well-being",
      "reduced ability to work",
      "state of the norm",
      "\"third\" state",
      "development of pre-disease"
    ],
    "answers": [
      "reduced ability to work"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 254,
    "category": "General Pathology",
    "question": "Pre-disease is:",
    "options": [
      "condition when a person has some problems with “normal” health during relatively short",
      "period",
      "special state of an organism characterized by limitation or disturbance of one or several",
      "compensatory mechanisms of recovery or their complexes",
      "simplest form of the pathological process",
      "non-specific symptoms of the disease",
      "first stage of the disease"
    ],
    "answers": [
      "compensatory mechanisms of recovery or their complexes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 255,
    "category": "General Pathology",
    "question": "Typical pathological processes include:",
    "options": [
      "anemia",
      "inflammation",
      "fever",
      "hypoxia",
      "pneumonia",
      "allergy"
    ],
    "answers": [
      "inflammation",
      "fever",
      "hypoxia",
      "allergy"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 256,
    "category": "General Pathology",
    "question": "Pathological reaction is:",
    "options": [
      "relatively short-term reaction of a separate functional system of organism in response to",
      "initial stimulation",
      "steady slowly developing process or its consequences",
      "painful change in function and structure",
      "symptom of the disease",
      "disease complication"
    ],
    "answers": [
      "initial stimulation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 257,
    "category": "General Pathology",
    "question": "Narrowing of heart valve which lead to heart insufficiency is:",
    "options": [
      "pathological state",
      "pathological process",
      "pathological reaction",
      "nosological form (disease)",
      "symptom of the disease"
    ],
    "answers": [
      "pathological state"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 258,
    "category": "General Pathology",
    "question": "Indicate examples of pathological state:",
    "options": [
      "hypoglycemia due to the introduction of large doses of insulin",
      "scar tissue changes",
      "atrophy of the alveolar processes of the jaw in connection with the removal",
      "teeth",
      "spasm of cardiac arterioles with pulmonary thrombosis",
      "acquired defect of the valvular apparatus of the heart"
    ],
    "answers": [
      "scar tissue changes",
      "teeth",
      "acquired defect of the valvular apparatus of the heart"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 259,
    "category": "General Pathology",
    "question": "Inflammation is:",
    "options": [
      "typical pathological process",
      "pathological reaction",
      "pathological state"
    ],
    "answers": [
      "typical pathological process"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 260,
    "category": "General Pathology",
    "question": "Pathological state is:",
    "options": [
      "inadequate in quantitative or qualitative sense and may be manifestation of not only disorder",
      "but also of defensive and adaptive mechanisms",
      "relatively persistent and stable abnormality of the body limiting its adaptive potential"
    ],
    "answers": [
      "relatively persistent and stable abnormality of the body limiting its adaptive potential"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 261,
    "category": "General Pathology",
    "question": "Norm is:",
    "options": [
      "state of complete physical mental and social well-being and not only the absence of disease or",
      "infirmity",
      "average size which characterizes properties or parameters of an organism",
      "biological optimum for the functioning and development of the organism",
      "special state of an organism characterized by limitation or disturbance of one or several",
      "compensatory mechanisms of recovery or their complexes"
    ],
    "answers": [
      "average size which characterizes properties or parameters of an organism",
      "biological optimum for the functioning and development of the organism"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 262,
    "category": "General Pathology",
    "question": "The cause of the disease is a factor (1):",
    "options": [
      "contributing to the occurrence of the disease",
      "which causes the disease and gives it specific features",
      "determining the non-specificity of the disease",
      "affecting the incidence of the disease",
      "affecting the severity and duration of the disease"
    ],
    "answers": [
      "which causes the disease and gives it specific features"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 263,
    "category": "General Pathology",
    "question": "Condition of health is characterized by following 3 special features:",
    "options": [
      "special state of an organism",
      "condition when an individual has good interrelation with surrounding",
      "can develop on the different levels of organization such as molecular cellular tissue organ",
      "systematic by presence of good labours activity in work",
      "preserving of the organism integrity and absence of severe physical defects"
    ],
    "answers": [
      "condition when an individual has good interrelation with surrounding",
      "preserving of the organism integrity and absence of severe physical defects"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 264,
    "category": "General Pathology",
    "question": "What is pathogenesis?",
    "options": [
      "doctrine of the mechanisms of occurrence course and outcome of the disease",
      "science that studies the causes and conditions of occurrence of diseases",
      "specific mechanisms for the development of pathological processes",
      "science that studies the typical pathological processes",
      "science that studies the typical forms of organ pathology"
    ],
    "answers": [
      "doctrine of the mechanisms of occurrence course and outcome of the disease"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 265,
    "category": "General Pathology",
    "question": "Etiology is a science:",
    "options": [
      "that studies the treatment of the disease",
      "that studies the outcome of the disease",
      "that studies causes and conditions of diseases"
    ],
    "answers": [
      "that studies causes and conditions of diseases"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 266,
    "category": "General Pathology",
    "question": "Monocausalism is:",
    "options": [
      "the direction which denies the main role of cause in the beginning of a disease",
      "the direction in the general etiology according to which the cause is the main factor in",
      "progress of the illness and each disease has only one cause",
      "trend that claims that impaired motor activity is the basis for the occurrence of diseases"
    ],
    "answers": [
      "progress of the illness and each disease has only one cause"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 267,
    "category": "General Pathology",
    "question": "Vicious circle in the pathogenesis of diseases is:",
    "options": [
      "transition of the initial acute phase into a chronic form with periods of exacerbation and",
      "remission",
      "cyclical course of the disease in which each new the cycle differs from the previous one in a",
      "progressive increase of disorders severity",
      "initial disorder becomes a factor of the subsequent disorder which in turn maintains and",
      "enhances the original defect forming a positive feedback loop"
    ],
    "answers": [
      "enhances the original defect forming a positive feedback loop"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 268,
    "category": "General Pathology",
    "question": "Pathogenesis is a doctrine:",
    "options": [
      "about the causes and conditions of the development of the disease",
      "about the disease",
      "about the mechanisms of the development of the disease",
      "about the reactivity of the body",
      "about the heredity of the body"
    ],
    "answers": [
      "about the mechanisms of the development of the disease"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 269,
    "category": "General Pathology",
    "question": "Sanogenesis is:",
    "options": [
      "doctrine about the causes and conditions of the development of the disease",
      "doctrine about of health maintenance and mechanism of convalesce",
      "doctrine about mechanisms of development and progress of a disease"
    ],
    "answers": [
      "doctrine about of health maintenance and mechanism of convalesce"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 270,
    "category": "Reactivity & Resistance",
    "question": "Reactivity is:",
    "options": [
      "response of the body to the stimulus",
      "property of organism and its structures to reply by changes of life activity to the influence of",
      "the environmental factors",
      "protective reaction of the body to the action of a pathogenic irritant",
      "mechanism elimination normalization of functions compensation of impaired processes",
      "nonspecific body resistance"
    ],
    "answers": [
      "the environmental factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 271,
    "category": "Reactivity & Resistance",
    "question": "There are 3 systems which participate in formation of organ reactivity",
    "options": [
      "endocrine system",
      "respiratory system",
      "cardiovascular system",
      "immune systems",
      "central nervous system"
    ],
    "answers": [
      "endocrine system",
      "immune systems",
      "central nervous system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 272,
    "category": "Reactivity & Resistance",
    "question": "Newborns are more likely to tolerate hypoxia than adults. That's an example:",
    "options": [
      "biological reactivity",
      "species reactivity",
      "agerelated reactivity",
      "sexual reactivity",
      "individual reactivity"
    ],
    "answers": [
      "agerelated reactivity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 273,
    "category": "Reactivity & Resistance",
    "question": "Non-specific reactivity examples are:",
    "options": [
      "allergy",
      "reactions during the acting of high and low temperature",
      "phagocytosis",
      "immunity"
    ],
    "answers": [
      "reactions during the acting of high and low temperature",
      "phagocytosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 274,
    "category": "Reactivity & Resistance",
    "question": "Specific reactivity examples are:",
    "options": [
      "allergy",
      "reactions during the acting of high and low temperature",
      "phagocytosis",
      "immunity"
    ],
    "answers": [
      "allergy",
      "immunity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 275,
    "category": "General Pathology",
    "question": "The uniqueness of each individual is determined by:",
    "options": [
      "species reactivity",
      "group reactivity",
      "individual reactivity",
      "gender",
      "constitutional features"
    ],
    "answers": [
      "individual reactivity"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 276,
    "category": "Reactivity & Resistance",
    "question": "Resistance of an organism is a property of an organism:",
    "options": [
      "respond to any environmental impact",
      "respond to the physiological effects of the environment",
      "respond only to extreme environmental factors",
      "resist the pathogenic effects of the environment",
      "resist any environmental influences"
    ],
    "answers": [
      "resist the pathogenic effects of the environment"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 277,
    "category": "Reactivity & Resistance",
    "question": "Resistance of the body is:",
    "options": [
      "ability of the body to respond to changes in life activity on environmental influences",
      "response of the body to the stimulus",
      "reduced body response to stimulus",
      "stability of organism to the acting of pathogenic factors",
      "body sensitivity to environmental factors"
    ],
    "answers": [
      "stability of organism to the acting of pathogenic factors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Reactivity & Resistance."
  },
  {
    "id": 278,
    "category": "General Pathology",
    "question": "The basic component of the pathogenesis of the disease is:",
    "options": [
      "damage resulting in vicious circles",
      "initial change or injury which is caused directly by action of etiologic agent",
      "causes and conditions of the disease",
      "damage that is irreversible"
    ],
    "answers": [
      "initial change or injury which is caused directly by action of etiologic agent"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 279,
    "category": "Fever Pathogenesis",
    "question": "Fever is",
    "options": [
      "a pathological reaction",
      "a typical pathological process",
      "a pathological state",
      "a disease",
      "a complication of the disease"
    ],
    "answers": [
      "a pathological reaction",
      "a typical pathological process"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 280,
    "category": "General Pathology",
    "question": "Specify the mechanisms involved in the increase in body",
    "options": [
      "temperature during fever:",
      "increase of the coupling of oxidation and phosphorylation",
      "peripheral vasoconstriction",
      "amplification of the contractile muscle thermogenesis",
      "decreased sweating",
      "activation of oxidative processes"
    ],
    "answers": [
      "peripheral vasoconstriction",
      "amplification of the contractile muscle thermogenesis",
      "decreased sweating",
      "activation of oxidative processes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 281,
    "category": "Fever Pathogenesis",
    "question": "Mechanisms of chemical thermoregulation at a fever is",
    "options": [
      "increase in heat production",
      "heat production does not change",
      "decrease in the heat loss"
    ],
    "answers": [
      "increase in heat production"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 282,
    "category": "Fever Pathogenesis",
    "question": "Mechanisms of physical thermoregulation at a fever is",
    "options": [
      "reduction of heat loss",
      "increase in heat production",
      "heat production does not change"
    ],
    "answers": [
      "reduction of heat loss"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 283,
    "category": "Fever Pathogenesis",
    "question": "Secondary pyrogens are formed in",
    "options": [
      "red blood cells",
      "platelets",
      "leukocytes",
      "hepatocytes",
      "parenchymal cells"
    ],
    "answers": [
      "leukocytes"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 284,
    "category": "Fever Pathogenesis",
    "question": "Producers of secondary pyrogens are:",
    "options": [
      "macrophages",
      "mast cells",
      "plasma cells",
      "neutrophils",
      "erythrocytes"
    ],
    "answers": [
      "macrophages",
      "neutrophils"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 285,
    "category": "Fever Pathogenesis",
    "question": "Secondary pyrogens include:",
    "options": [
      "interleukin-1",
      "interleukin-4",
      "interleukin-8",
      "interleukin 6",
      "tumor necrosis factor",
      "endotoxins of microorganisms"
    ],
    "answers": [
      "interleukin-1",
      "interleukin-8",
      "interleukin 6",
      "tumor necrosis factor"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 286,
    "category": "Fever Pathogenesis",
    "question": "Leukocytic pyrogens act on",
    "options": [
      "the heat-sensitive peripheral receptors",
      "otoneurons of the spinal cord",
      "neurons of the preoptic area of the hypothalamus",
      "neuro-conductive path",
      "the spin-cortical path"
    ],
    "answers": [
      "neurons of the preoptic area of the hypothalamus"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 287,
    "category": "Fever Pathogenesis",
    "question": "Under the influence of secondary pyrogens in the endothelium of",
    "options": [
      "brain capillaries",
      "increases the synthesis of prostaglandins",
      "decreases the synthesis of prostaglandins"
    ],
    "answers": [
      "increases the synthesis of prostaglandins"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 288,
    "category": "Fever Pathogenesis",
    "question": "Increase of the temperature in fever due to influence of the",
    "options": [
      "secondary on the",
      "center of thermoregulation, which is located in the cerebral cortex",
      "the reticular formation",
      "the hypothalamus",
      "the medulla oblongata",
      "the limbic system"
    ],
    "answers": [
      "the hypothalamus"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 289,
    "category": "General Pathology",
    "question": "The following assertion is correct",
    "options": [
      "pyrogenic properties of bacterial cells depend on their virulence",
      "endotoxins of gram-negative bacteria relate to endogenous",
      "pyrogens",
      "exogenous pyrogens are lipopolysaccharides",
      "degree of temperature elevation in fevers depends on the ambient",
      "temperature",
      "mechanisms of thermoregulation is violated at a fever"
    ],
    "answers": [
      "exogenous pyrogens are lipopolysaccharides"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 290,
    "category": "Fever Pathogenesis",
    "question": "The missing link of the pathogenesis of increase of body temperature in fever is (Exogenous pyrogens -> phagocytes -> ? -> the thermoregulation center):",
    "options": [
      "microbial endotoxins",
      "secondary pyrogens",
      "prostaglandins",
      "cyclic nucleotides",
      "lipoproteins"
    ],
    "answers": [
      "secondary pyrogens",
      "prostaglandins"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 291,
    "category": "Fever Pathogenesis",
    "question": "Fever is characterized by:",
    "options": [
      "the restructuring of the mechanisms of thermoregulation",
      "the mechanisms of thermoregulation are not changed"
    ],
    "answers": [
      "the restructuring of the mechanisms of thermoregulation"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 292,
    "category": "General Pathology",
    "question": "Decrease in heat loss promotes:",
    "options": [
      "vasodilation of the skin",
      "increased sweating",
      "increasing the tone of the parasympathetic nervous system",
      "rapid breathing",
      "increasing the tone of the sympathetic nervous system"
    ],
    "answers": [
      "increasing the tone of the sympathetic nervous system"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 293,
    "category": "Fever Pathogenesis",
    "question": "The rapid rise of temperature in the first stage of fever is",
    "options": [
      "accompanied by",
      "muscle tremors and chills",
      "tachypnea",
      "the redness of the skin",
      "decrease in blood pressure",
      "increased sweating"
    ],
    "answers": [
      "muscle tremors and chills"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 294,
    "category": "Fever Pathogenesis",
    "question": "The degree of increase in body temperature during fever depends",
    "options": [
      "on:",
      "the concentration of exogenous pyrogens in tissues",
      "the intensity of cytokine production by producer cells",
      "the sensitivity of the thermoregulatory center to the action of",
      "pyrogens",
      "age of the patient",
      "thermal insulating properties of clothing"
    ],
    "answers": [
      "the concentration of exogenous pyrogens in tissues",
      "the intensity of cytokine production by producer cells",
      "the sensitivity of the thermoregulatory center to the action of",
      "pyrogens",
      "age of the patient"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 295,
    "category": "Fever Pathogenesis",
    "question": "In the first stage of fever is observed",
    "options": [
      "increase of the heat production without changing of heat loss",
      "increase of the heat production and heat loss",
      "reduction of the heat loss and enhancement of the heat",
      "production",
      "reduction of the heat production and heat loss",
      "reduction of the heat production and increase of the heat loss"
    ],
    "answers": [
      "reduction of the heat loss and enhancement of the heat",
      "production"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 296,
    "category": "Fever Pathogenesis",
    "question": "The first stage of fever is characterized by:",
    "options": [
      "increase in blood pressure",
      "tachycardia",
      "chills, muscle tremors",
      "decrease in urine output",
      "increased sweating"
    ],
    "answers": [
      "increase in blood pressure",
      "tachycardia",
      "chills, muscle tremors"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 297,
    "category": "Fever Pathogenesis",
    "question": "The second stage of fever is characterized by:",
    "options": [
      "bradycardia",
      "the redness of the skin",
      "increasing motility of the gastrointestinal tract",
      "an increase in urine output",
      "tachycardia"
    ],
    "answers": [
      "the redness of the skin",
      "tachycardia"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 298,
    "category": "Fever Pathogenesis",
    "question": "The third stage of fever is characterized by:",
    "options": [
      "decrease in blood pressure",
      "increase in blood pressure"
    ],
    "answers": [
      "decrease in blood pressure"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 299,
    "category": "Fever Pathogenesis",
    "question": "Gain of the heat loss in third stage of fever is associated with",
    "options": [
      "vasoconstriction",
      "the suppression of sweating",
      "increased metabolism",
      "increased sweating",
      "high blood pressure"
    ],
    "answers": [
      "increased sweating"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 300,
    "category": "Fever Pathogenesis",
    "question": "“Critical” drop of the temperature in fever is dangerous by",
    "options": [
      "the development of collapse",
      "increasing motility of the gastrointestinal tract",
      "the development of hyperhydration",
      "rapid heart rate",
      "an increase in blood pressure"
    ],
    "answers": [
      "the development of collapse"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 301,
    "category": "Fever Pathogenesis",
    "question": "The feverish temperature curve, characterized by daily",
    "options": [
      "fluctuations in temperature not exceeding 1°C is called",
      "indulgenced",
      "intermittent",
      "constant",
      "atypical",
      "exhausting"
    ],
    "answers": [
      "constant"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 302,
    "category": "Fever Pathogenesis",
    "question": "Subfebrile fever is called the rise in temperature",
    "options": [
      "38-39°C",
      "39-41°C",
      "37-38°C",
      "above 41°C",
      "above 42°C"
    ],
    "answers": [
      "37-38°C"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 303,
    "category": "General Pathology",
    "question": "Febrile reaction, which characterized by daily fluctuations in",
    "options": [
      "temperature 3-5°C, is called",
      "constant (f.continua)",
      "exhausting (f.hectica)",
      "atypical (f.athypica)",
      "indulgenced (f.remittens)",
      "revocable (f.recurrens)"
    ],
    "answers": [
      "exhausting (f.hectica)",
      "atypical (f.athypica)"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 304,
    "category": "General Pathology",
    "question": "When the body temperature rises by 1°C, the heart rate increases",
    "options": [
      "by",
      "18-20 per one minute",
      "6-7 per one minute",
      "8-10 per one minute",
      "50 – 60 per one minute",
      "30 – 40 per one minute"
    ],
    "answers": [
      "8-10 per one minute"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 305,
    "category": "Fever Pathogenesis",
    "question": "Tachycardia in fever occurs as a result of direct action of warm",
    "options": [
      "blood",
      "at the point of installation",
      "on the sinus node",
      "on the thermostat",
      "on the spinal center of thermoregulation",
      "on the peripheral thermosensitive receptors"
    ],
    "answers": [
      "on the sinus node"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 306,
    "category": "Fever Pathogenesis",
    "question": "It is typical for fever",
    "options": [
      "the predominance of the processes of lipogenesis over lipolysis",
      "the prevalence of gluconeogenesis over glycogenolysis",
      "activation of glycogenolysis and lipolysis",
      "inhibition of ketogenesis",
      "inhibition of proteolysis"
    ],
    "answers": [
      "activation of glycogenolysis and lipolysis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 307,
    "category": "Fever Pathogenesis",
    "question": "The change of water and salt balance in the second stage of fever",
    "options": [
      "is characterized",
      "hyperosmolar dehydration",
      "excretion of water and sodium from the body",
      "isoosmolar dehydration",
      "hypoosmolar dehydration",
      "chloride and sodium retention in the body"
    ],
    "answers": [
      "chloride and sodium retention in the body"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  },
  {
    "id": 308,
    "category": "General Pathology",
    "question": "The following statement is correct",
    "options": [
      "chills is a typical manifestation of the second stage of the fever",
      "sensation of thermal comfort is characterized for the first stage",
      "of fever",
      "pallor and coldness of the skin are characteristic for the first stage",
      "sweating is more pronounced in the first stage of fever",
      "diuresis is reduced in the third stage of fever. 33. The",
      "negative value of fever is",
      "activation of antibody synthesis",
      "an increase in the formation of interferons",
      "depletion of energy reserves",
      "activation of phagocytosis",
      "reducing microbial growth"
    ],
    "answers": [
      "pallor and coldness of the skin are characteristic for the first stage",
      "of fever",
      "depletion of energy reserves"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 309,
    "category": "General Pathology",
    "question": "Increase in body temperature more easily tolerated",
    "options": [
      "at the fever",
      "at the sunstroke",
      "at the heatstroke",
      "at the overheating",
      "at the malignant hyperthermia"
    ],
    "answers": [
      "at the fever"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning General Pathology."
  },
  {
    "id": 310,
    "category": "Fever Pathogenesis",
    "question": "The positive role of fever is",
    "options": [
      "reduction of antitoxic function of the liver",
      "suppression of the synthesis of antibodies",
      "enhancing of phagocytosis",
      "enhancing of the fibroblast proliferation",
      "enhancing of the catabolic processes"
    ],
    "answers": [
      "enhancing of phagocytosis"
    ],
    "explanation": "This is a premium pathophysiological assessment item concerning Fever Pathogenesis."
  }
];

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function prepareQuizData(questions: Question[]): Question[] {
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}
