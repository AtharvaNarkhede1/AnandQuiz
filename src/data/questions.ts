export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
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
    "answer": "Coagulopathies",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Coagulopathies, Thrombocytopathies, Vasopathies."
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
    "answer": "Quantitative and qualitative alterations in plasma factors",
    "explanation": "This is a classic question concerning haemostasis & blood. The verified physiological concept confirms: \"Quantitative and qualitative alterations in plasma factors\" as the target answer."
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
    "answer": "Haemophilia A",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Haemophilia A\" as the target answer."
  },
  {
    "id": 4,
    "category": "Pathophysiology",
    "question": "Which are the pathogenetic mechanisms in the development of thrombocytopenia?:",
    "options": [
      "Suppressed thrombogenesis",
      "Increased platelets destruction in the periphery",
      "Suppressed thrombin synthesis"
    ],
    "answer": "Suppressed thrombogenesis",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: Suppressed thrombogenesis, Increased platelets destruction in the periphery."
  },
  {
    "id": 5,
    "category": "Haemostasis & Blood",
    "question": "Hemophilia A is associated with (2)",
    "options": [
      "Mutation in the sex X chromosome",
      "Deficiency of factor VIII",
      "Factor IX deficiency",
      "Deficiency Factor XI",
      "Mutation in an autosome"
    ],
    "answer": "Mutation in the sex X chromosome",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Mutation in the sex X chromosome, Deficiency of factor VIII."
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
    "answer": "Mutation in the sex X chromosome",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Mutation in the sex X chromosome, Factor IX deficiency."
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
    "answer": "Taking aspirin",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Taking aspirin, Glanzmann thrombasthenia, Diseases of von Willebrand."
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
    "answer": "Hematoma",
    "explanation": "This is a classic question concerning haemostasis & blood. The verified physiological concept confirms: \"Hematoma\" as the target answer."
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
    "answer": "Petechial haemorrhages",
    "explanation": "This is a classic question concerning haemostasis & blood. The verified physiological concept confirms: \"Petechial haemorrhages\" as the target answer."
  },
  {
    "id": 10,
    "category": "Haemostasis & Blood",
    "question": "For hemophilia A, the statement is true that it is due to (2)",
    "options": [
      "Violation of the external coagulation mechanism",
      "Violation of the internal coagulation mechanism",
      "Factor VIII deficiency",
      "Factor IX deficiency",
      "Factor XI deficiency"
    ],
    "answer": "Violation of the internal coagulation mechanism",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Violation of the internal coagulation mechanism, Factor VIII deficiency."
  },
  {
    "id": 11,
    "category": "Pathophysiology",
    "question": "Indicate changes characteristic of von Willebrand disease:",
    "options": [
      "increase in the duration of capillary bleeding",
      "prolongation of blood coagulation time",
      "deficiency of von Willebrand factor",
      "platelet aggregation activation",
      "decrease in procoagulant activity of factor YIII"
    ],
    "answer": "increase in the duration of capillary bleeding",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: increase in the duration of capillary bleeding, prolongation of blood coagulation time, deficiency of von Willebrand factor, decrease in procoagulant activity of factor YIII."
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
    "answer": "disseminated microthrombosis",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: disseminated microthrombosis, massive damage to body tissues, platelet aggregation activation."
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
    "answer": "antithrombin III",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: antithrombin III, heparin."
  },
  {
    "id": 14,
    "category": "Pathophysiology",
    "question": "Indicate the factors causing the development of thrombocytopenia:",
    "options": [
      "inhibition of proliferation of megakaryoblasts",
      "displacement of megakaryocytic bone marrow growth by leukemia cells",
      "activation of leukocyte bone marrow growth in inflammation",
      "increased \"consumption\" of platelets in the process of thrombosis",
      "immune platelet damage"
    ],
    "answer": "inhibition of proliferation of megakaryoblasts",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: inhibition of proliferation of megakaryoblasts, displacement of megakaryocytic bone marrow growth by leukemia cells, increased \"consumption\" of platelets in the process of thrombosis, immune platelet damage."
  },
  {
    "id": 15,
    "category": "Pathophysiology",
    "question": "Indicate the causes of DIC:",
    "options": [
      "syndrome of \"prolonged crushing\"",
      "acute leukemia",
      "vitamin deficiency K",
      "sepsis",
      "shock"
    ],
    "answer": "syndrome of \"prolonged crushing\"",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: syndrome of \"prolonged crushing\", acute leukemia, sepsis, shock."
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
    "answer": "bleeding duration",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: bleeding duration, coagulation time."
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
    "answer": "Congestive heart failure",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: Congestive heart failure, Malignant tumors with disseminated metastases, Atherosclerosis."
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
    "answer": "less than 20 x 10 9 / l",
    "explanation": "This is a classic question concerning haemostasis & blood. The verified physiological concept confirms: \"less than 20 x 10 9 / l\" as the target answer."
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
    "answer": "Thrombocytopenia",
    "explanation": "This is a classic question concerning haemostasis & blood. The multiple correct characteristics are: Thrombocytopenia, Hypofibrinogenemia, The low content of factors II, V, VIII."
  },
  {
    "id": 20,
    "category": "Pathophysiology",
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
    "answer": "Acute leukemia",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: Acute leukemia, Radiation sickness, B12-folic deficiency anemia, Aplastic anemia."
  },
  {
    "id": 21,
    "category": "Pathophysiology",
    "question": "What syndromes and forms of pathology cause disseminated small blood vessel thrombosis?",
    "options": [
      "Dissemenated intravascular coagulation",
      "Thrombotic thrombocytopenic purpura",
      "Atherosclerosis",
      "Hemolytic uremic syndrome",
      "The phenomenon of Arthus",
      "AIDS",
      "Vitamin K deficiency",
      "Manifestations of the hypocoagulation stage of DIC syndrome",
      "thrombocytopenia",
      "hyperthromboplastinemia",
      "shortening of blood clotting time",
      "To which group of hemorrhagic diathesis does hemophilia belong?",
      "associated with blood clotting disorder",
      "associated with vascular wall disorder",
      "associated with platelet system pathology",
      "associated with anticoagulant system pathology",
      "In which vessels do blood clots form most often?",
      "in veins",
      "in arteries",
      "in capillaries",
      "in lymphatic vessels",
      "Absolute deficiency of vitamin K in the body will lead to",
      "impaired platelet adhesion",
      "intestinal dysbacteriosis",
      "hypercoagulation",
      "impaired platelet aggregation",
      "deficiency of coagulation factors in blood plasma",
      "The first stage of coagulation hemostasis ends with the formation of",
      "prothrombin",
      "prothrombinase",
      "The intrinsic pathway of coagulation hemostasis begins with",
      "activation of prothrombin",
      "release of thromboplastin",
      "activation of contact factor",
      "activation of prothrombinase",
      "activation of platelets",
      "The extrinsic pathway of coagulation hemostasis begins with",
      "activation of prothrombin",
      "release of thromboplastin",
      "activation of contact factor",
      "activation of prothrombinase",
      "activation of platelets",
      "The causes of DIC syndrome are",
      "shock",
      "leukopenia",
      "erythremia",
      "leukocytosis",
      "hypervitaminosis K",
      "The hypocoagulation stage of DIC syndrome is mainly associated with",
      "an increase in the number of platelets",
      "activation of hemostasis",
      "consumption of blood coagulation factors",
      "inhibition of fibrinolysis",
      "activation of primary anticoagulants",
      "Hemophilia A is associated with",
      "a mutation in the Y sex chromosome",
      "a deficiency of factor VIII",
      "a deficiency of factor IX",
      "a deficiency of factor XI",
      "a mutation in an autosome",
      "Impaired platelet function can be observed in",
      "hemophilia C",
      "hemophilia A",
      "hemophilia B",
      "Glanzmann's thrombasthenia",
      "hypervitaminosis",
      "The most characteristic sign of hemophilia A",
      "prolongation of bleeding time",
      "prolongation of blood clotting time",
      "positive tourniquet test, pinch",
      "decrease in prothrombin time",
      "positive ethanol test",
      "Characteristic sign of thrombocytopenia",
      "prolongation of bleeding time",
      "prolongation of blood clotting time",
      "negative tourniquet test, pinch",
      "decrease in prothrombin time",
      "positive ethanol test",
      "Bleeding in hemophilia A is caused by",
      "impaired vascular-platelet hemostasis",
      "impaired platelet hemostasis",
      "impaired coagulation hemostasis",
      "depletion of blood clotting factors",
      "excess of blood clotting factors"
    ],
    "answer": "Dissemenated intravascular coagulation",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: Dissemenated intravascular coagulation, Thrombotic thrombocytopenic purpura, Hemolytic uremic syndrome, thrombocytopenia, associated with blood clotting disorder, in veins, deficiency of coagulation factors in blood plasma, prothrombinase, activation of contact factor, release of thromboplastin, shock, consumption of blood coagulation factors, a deficiency of factor VIII, Glanzmann's thrombasthenia, prolongation of blood clotting time, prolongation of bleeding time, impaired coagulation hemostasis."
  },
  {
    "id": 22,
    "category": "Hypoxia Studies",
    "question": "Hypoxia is",
    "options": [
      "typical pathological process",
      "pathological reaction",
      "pathological condition",
      "illness",
      "symptom complex"
    ],
    "answer": "typical pathological process",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"typical pathological process\" as the target answer."
  },
  {
    "id": 23,
    "category": "Hypoxia Studies",
    "question": "Hypoxia, developing with a decrease in the partial pressure of oxygen in the inhaled air, is called",
    "options": [
      "exogenous",
      "hemic",
      "circulatory",
      "endogenous",
      "What is “hypoxia”?",
      "Disrupted oxygen exchange",
      "Oxygen toxicity",
      "decrease in biological oxidation, leading to depletion of ATP",
      "Reduced oxygen needs",
      "Limited aerobic capacity"
    ],
    "answer": "exogenous",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: exogenous, decrease in biological oxidation, leading to depletion of ATP."
  },
  {
    "id": 24,
    "category": "Hypoxia Studies",
    "question": "Exogenic hypobaric hypoxia is a result of:",
    "options": [
      "Disturbance in respiratory lung function",
      "Decreased pO2 in the inhaled air",
      "Damaged respiratory center",
      "Increased pO2 in the exhaled air",
      "Disorders of the respiratory muscles"
    ],
    "answer": "Decreased pO2 in the inhaled air",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Decreased pO2 in the inhaled air\" as the target answer."
  },
  {
    "id": 25,
    "category": "Hypoxia Studies",
    "question": "Which statement refers to exogenous hypobaric hypoxia (2)?",
    "options": [
      "Respiratory system is seriously compromised",
      "Respiratory system is intact",
      "Must be accompanied by hypercapnia",
      "Dramatically reduction of hemoglobin amount",
      "respiratory alkalosis can arise"
    ],
    "answer": "Respiratory system is intact",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: Respiratory system is intact, respiratory alkalosis can arise."
  },
  {
    "id": 26,
    "category": "Hypoxia Studies",
    "question": "What is the general effect from the development of circulatory hypoxia?",
    "options": [
      "Methemoglobin reductase block",
      "Decreased ventilation/perfusion ratio",
      "Effective hemoglobin deficiency",
      "Direct mitochondrial decoupling",
      "Tissue hypoperfusion"
    ],
    "answer": "Tissue hypoperfusion",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Tissue hypoperfusion\" as the target answer."
  },
  {
    "id": 27,
    "category": "Hypoxia Studies",
    "question": "Basic mechanisms for development of histotoxic hypoxia are:",
    "options": [
      "Increased mitochondrial oxygen reduction",
      "Decreased mitochondrial oxygen reduction",
      "Reduced efficiency of the oxygen energy production",
      "Insufficient functional energy provision"
    ],
    "answer": "Decreased mitochondrial oxygen reduction",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: Decreased mitochondrial oxygen reduction, Reduced efficiency of the oxygen energy production."
  },
  {
    "id": 28,
    "category": "Hypoxia Studies",
    "question": "Exogenous normobaric hypoxia occurs when",
    "options": [
      "climbing mountains",
      "lift in aircraft",
      "caisson works",
      "being in an unventilated room"
    ],
    "answer": "being in an unventilated room",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"being in an unventilated room\" as the target answer."
  },
  {
    "id": 29,
    "category": "Hypoxia Studies",
    "question": "Exogenous hypobaric hypoxia is observed with Indicate a characteristic change in blood composition with exogenous hypobaric hypoxia",
    "options": [
      "being in the mines",
      "at divers",
      "in case of malfunction of anesthesia-respiratory equipment",
      "when climbing to a high altitude",
      "when sailing in submarines",
      "hyperglycemia",
      "hypocapnia",
      "hypercapnia",
      "decrease in blood lactate",
      "hyperproteinemia"
    ],
    "answer": "when climbing to a high altitude",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: when climbing to a high altitude, hypocapnia."
  },
  {
    "id": 30,
    "category": "Hypoxia Studies",
    "question": "Hypoxia associated with the development of disorders in the blood system is called",
    "options": [
      "exogenous",
      "circulatory",
      "tissue",
      "ischemic",
      "anemic"
    ],
    "answer": "anemic",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"anemic\" as the target answer."
  },
  {
    "id": 31,
    "category": "Hypoxia Studies",
    "question": "Carbon monoxide poisoning leads to the development of hypoxia.",
    "options": [
      "tissue",
      "anemic",
      "circulatory",
      "respiratory",
      "exogenous"
    ],
    "answer": "anemic",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"anemic\" as the target answer."
  },
  {
    "id": 32,
    "category": "Hypoxia Studies",
    "question": "Hypoxia, developing in the pathology of the cardiovascular system,",
    "options": [
      "tissue",
      "exogenous",
      "respiratory",
      "hemic",
      "circulatory"
    ],
    "answer": "circulatory",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"circulatory\" as the target answer."
  },
  {
    "id": 33,
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
    "answer": "CO poisoning",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: CO poisoning, nitrate poisoning, chronic blood loss, hypovitaminosis B12."
  },
  {
    "id": 34,
    "category": "Hypoxia Studies",
    "question": "Indicate the causes of respiratory-type hypoxia:",
    "options": [
      "CO poisoning",
      "pulmonary emphysema",
      "nitrate poisoning",
      "chronic blood loss",
      "hypovitaminosis B12",
      "a decrease in the excitability of the respiratory center"
    ],
    "answer": "pulmonary emphysema",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: pulmonary emphysema, a decrease in the excitability of the respiratory center."
  },
  {
    "id": 35,
    "category": "Hypoxia Studies",
    "question": "In the pathogenesis of tissue hypoxia, it matters:",
    "options": [
      "inactivation of respiratory enzymes",
      "violation of the synthesis of respiratory enzymes",
      "dissociation of oxidation and phosphorylation",
      "damage to mitochondria",
      "reduced tissue oxygen demand"
    ],
    "answer": "inactivation of respiratory enzymes",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: inactivation of respiratory enzymes, violation of the synthesis of respiratory enzymes, dissociation of oxidation and phosphorylation, damage to mitochondria."
  },
  {
    "id": 36,
    "category": "Hypoxia Studies",
    "question": "The circulatory-hemic (mixed) type of hypoxia is characteristic of",
    "options": [
      "dehydration",
      "pneumonia",
      "acute blood loss",
      "hemolytic anemia",
      "carbon monoxide poisoning (CO)"
    ],
    "answer": "acute blood loss",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"acute blood loss\" as the target answer."
  },
  {
    "id": 37,
    "category": "Hypoxia Studies",
    "question": "The most sensitive to oxygen deficiency is:",
    "options": [
      "bones",
      "muscles",
      "connective tissue",
      "structure of the nervous system",
      "kidney"
    ],
    "answer": "structure of the nervous system",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"structure of the nervous system\" as the target answer."
  },
  {
    "id": 38,
    "category": "Hypoxia Studies",
    "question": "Urgent compensatory reactions in hypoxia are (3):",
    "options": [
      "release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answer": "release of deposited blood",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: release of deposited blood, tachycardia, hyperpnea."
  },
  {
    "id": 39,
    "category": "Hypoxia Studies",
    "question": "Long-term adaptation to hypoxia provides",
    "options": [
      "release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answer": "hypertrophy of the respiratory muscles",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: hypertrophy of the respiratory muscles, activation of erythropoiesis."
  },
  {
    "id": 40,
    "category": "Hypoxia Studies",
    "question": "What are the mechanisms leading to an increase in oxygen capacity blood with moderate repeated hypoxia:",
    "options": [
      "increased cardiac output",
      "an increase in the formation of erythropoietin",
      "accelerating the release of red blood cells from the bone marrow into the blood",
      "an increase in the number of red blood cells in the blood",
      "increase in alveolar ventilation"
    ],
    "answer": "an increase in the formation of erythropoietin",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: an increase in the formation of erythropoietin, accelerating the release of red blood cells from the bone marrow into the blood, an increase in the number of red blood cells in the blood."
  },
  {
    "id": 41,
    "category": "Hypoxia Studies",
    "question": "The main pathogenetic unit of circulatory hypoxia is:",
    "options": [
      "Reduced effective hemoglobin",
      "Systolic cardiac dysfunction",
      "Reduced effective circulatory volume",
      "Decreased hematocrit",
      "Blood depots depletion"
    ],
    "answer": "Reduced effective circulatory volume",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Reduced effective circulatory volume\" as the target answer."
  },
  {
    "id": 42,
    "category": "Hypoxia Studies",
    "question": "In which hypoxia type the processes of O2 intake, transport and delivery to the cells are not disturbed?:",
    "options": [
      "Circulatory hypoxia",
      "Hypoxic hypoxia",
      "Hemic hypoxia of anemic type",
      "Overutilization hypoxia",
      "Hemic hypoxia of inactivity type"
    ],
    "answer": "Hemic hypoxia of anemic type",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Hemic hypoxia of anemic type\" as the target answer."
  },
  {
    "id": 43,
    "category": "Hypoxia Studies",
    "question": "Tissue hypoxia is the final result of:",
    "options": [
      "Reduced physical activity",
      "Absolute starvation",
      "Each metabolic abnormality",
      "Severe and/ or progressive systemic hypoxia"
    ],
    "answer": "Severe and/ or progressive systemic hypoxia",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Severe and/ or progressive systemic hypoxia\" as the target answer."
  },
  {
    "id": 44,
    "category": "Hypoxia Studies",
    "question": "Increased oxygen transporting capacity of the blood is a result of:",
    "options": [
      "Increased blood pressure",
      "Increased tissues vascularization",
      "Compensatory heart hypertrophy",
      "Compensatory diminished erithrolysis",
      "Compensatory erythropoesis"
    ],
    "answer": "Compensatory erythropoesis",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"Compensatory erythropoesis\" as the target answer."
  },
  {
    "id": 45,
    "category": "Hypoxia Studies",
    "question": "Exogenous normobaric hypoxia occurs when:",
    "options": [
      "the climb in the mountains",
      "the climb in aircraft",
      "diving operations",
      "reducing the PCO2 in the air",
      "staying in unvented premises"
    ],
    "answer": "staying in unvented premises",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"staying in unvented premises\" as the target answer."
  },
  {
    "id": 46,
    "category": "Hypoxia Studies",
    "question": "Exogenous normobaric hypoxia occurs when:",
    "options": [
      "the climb a in the mountains",
      "increase in barometric pressure",
      "decrease in barometric pressure",
      "an increase in pO2 in the air",
      "being in a closed room"
    ],
    "answer": "being in a closed room",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"being in a closed room\" as the target answer."
  },
  {
    "id": 47,
    "category": "Hypoxia Studies",
    "question": "A typical change in the composition of blood when exogenous normobaric hypoxia is:",
    "options": [
      "hypocapnia",
      "hypoxemia",
      "alkalosis",
      "hyperlipidemia",
      "hyperproteinemia"
    ],
    "answer": "hypocapnia",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: hypocapnia, hypoxemia."
  },
  {
    "id": 48,
    "category": "Hypoxia Studies",
    "question": "Indicate the characteristic change in the composition of the blood when exogenous hypobaric hypoxia: hyperproteinemia.",
    "options": [
      "hyperglycemia",
      "hypocapnia",
      "hypercapnia",
      "reduction of blood lactate"
    ],
    "answer": "hypocapnia",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"hypocapnia\" as the target answer."
  },
  {
    "id": 49,
    "category": "Hypoxia Studies",
    "question": "Specify the changes in the blood which are characteristic for exogenous hypobaric hypoxia:",
    "options": [
      "hypercapnia",
      "hypocapnia",
      "hypoxemia",
      "gas alkalosis",
      "gas acidosis"
    ],
    "answer": "hypocapnia",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: hypocapnia, hypoxemia, gas alkalosis."
  },
  {
    "id": 50,
    "category": "Hypoxia Studies",
    "question": "The partial arterial oxygen pressure – 70 mm Hg, partial pressure of carbon dioxide in the arterial blood – 58 mmHg is characteristic for:",
    "options": [
      "exogenous hypobaric type of hypoxia",
      "hemic type of hypoxia",
      "tissue type of hypoxia",
      "respiratory type of hypoxia",
      "circulatory type of hypoxia"
    ],
    "answer": "respiratory type of hypoxia",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"respiratory type of hypoxia\" as the target answer."
  },
  {
    "id": 51,
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
    "answer": "CO poisoning",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: CO poisoning, nitrate poisoning, chronic blood loss, hypovitaminosis B12."
  },
  {
    "id": 52,
    "category": "Hypoxia Studies",
    "question": "Specify the reasons of the hypoxia of respiratory type:",
    "options": [
      "CO poisoning",
      "emphysema of lungs",
      "nitrate poisoning",
      "chronic blood loss",
      "hypovitaminosis B12",
      "decrease in excitability of the respiratory center"
    ],
    "answer": "emphysema of lungs",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: emphysema of lungs, decrease in excitability of the respiratory center."
  },
  {
    "id": 53,
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
    "answer": "an increase of the sodium in the cell",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: an increase of the sodium in the cell, activation of phospholipase, release of lysosomal enzymes, accumulation of calcium in mitochondria, disruption of the membrane pump systems."
  },
  {
    "id": 54,
    "category": "Hypoxia Studies",
    "question": "Provide the long-term adaptation to hypoxia:",
    "options": [
      "the release of deposited blood",
      "tachycardia",
      "hyperpnea",
      "hypertrophy of the respiratory muscles",
      "activation of erythropoiesis"
    ],
    "answer": "hypertrophy of the respiratory muscles",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: hypertrophy of the respiratory muscles, activation of erythropoiesis."
  },
  {
    "id": 55,
    "category": "Hypoxia Studies",
    "question": "The most sensitive to oxygen deficiency are:",
    "options": [
      "bone",
      "muscles",
      "connective tissue",
      "structures nervous system",
      "kidneys"
    ],
    "answer": "structures nervous system",
    "explanation": "This is a classic question concerning hypoxia studies. The verified physiological concept confirms: \"structures nervous system\" as the target answer."
  },
  {
    "id": 56,
    "category": "Hypoxia Studies",
    "question": "Specify the emergency reactions of adaptation to hypoxia:",
    "options": [
      "an increase in alveolar ventilation",
      "mobilization of deposited blood",
      "enhancement of anaerobic glycolysis",
      "reduction of the oxyhemoglobin dissociation",
      "increase the number of mitochondria in the cell"
    ],
    "answer": "an increase in alveolar ventilation",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: an increase in alveolar ventilation, mobilization of deposited blood, enhancement of anaerobic glycolysis."
  },
  {
    "id": 57,
    "category": "Hypoxia Studies",
    "question": "What changes in the cell can be considered as compensatory during hypoxia? ) activation of phospholipase A2;",
    "options": [
      "lowering activity of Na/K+ and Ca2+ – ATPase",
      "activation of glycolysis",
      "mobilization of glycogen",
      "activation of POL"
    ],
    "answer": "lowering activity of Na/K+ and Ca2+ – ATPase",
    "explanation": "This is a classic question concerning hypoxia studies. The multiple correct characteristics are: lowering activity of Na/K+ and Ca2+ – ATPase, activation of glycolysis, mobilization of glycogen."
  },
  {
    "id": 58,
    "category": "Respiratory Pathophysiology",
    "question": "Which defense mechanism of the respiratory system has a reflex character?",
    "options": [
      "Cough",
      "Alveolar macrophage system",
      "Mucocilliary escalator",
      "Antioxidant systems",
      "Nasopharyngeal filter"
    ],
    "answer": "Cough",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Cough\" as the target answer."
  },
  {
    "id": 59,
    "category": "Respiratory Pathophysiology",
    "question": "The most important outcome of alveolar hypoventilation is:",
    "options": [
      "Cyanosis",
      "Increased airway resistance",
      "Dyspnea",
      "Orthopnea",
      "Respiratory acidosis"
    ],
    "answer": "Respiratory acidosis",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Respiratory acidosis\" as the target answer."
  },
  {
    "id": 60,
    "category": "Respiratory Pathophysiology",
    "question": "What does ventilation/perfusion mismatch mean?",
    "options": [
      "Absolutely increased or decreased ventilation and blood flow in the lungs",
      "Inadequately distributed blood flow in the lungs",
      "Limited capillary blood flow during maximal inspiration",
      "Mismatch between the airflow in the lungs and capillary blood flow",
      "Discrepancy between the ventilation and perfusion in the different parts of the lung"
    ],
    "answer": "Mismatch between the airflow in the lungs and capillary blood flow",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Mismatch between the airflow in the lungs and capillary blood flow\" as the target answer."
  },
  {
    "id": 61,
    "category": "Pathophysiology",
    "question": "The diffusion capacity of the lungs decreases in all of the following, except one:",
    "options": [
      "Anemia",
      "Interstitial fibrosis",
      "Bullous emphysema",
      "Pulmonary edema",
      "Increased cardiac output"
    ],
    "answer": "Increased cardiac output",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Increased cardiac output\" as the target answer."
  },
  {
    "id": 62,
    "category": "Pathophysiology",
    "question": "Hypercapnia could be due to:",
    "options": [
      "Hyperventilation",
      "State of anxiety and excitement",
      "Hypoxic stimuli",
      "Drugs suppressing the respiratory center",
      "Increased physical activity"
    ],
    "answer": "Drugs suppressing the respiratory center",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Drugs suppressing the respiratory center\" as the target answer."
  },
  {
    "id": 63,
    "category": "Respiratory Pathophysiology",
    "question": "Cyanosis in respiratory failure is mostly due to:",
    "options": [
      "Polycythemia",
      "Hypercapnia",
      "Increased fraction of reduced hemoglobin",
      "Peripheral vascular spasm",
      "Decreased dyshemoglobin"
    ],
    "answer": "Increased fraction of reduced hemoglobin",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Increased fraction of reduced hemoglobin\" as the target answer."
  },
  {
    "id": 64,
    "category": "Respiratory Pathophysiology",
    "question": "Which disease is typically accompanied by chest pain while breathing:",
    "options": [
      "Pulmonary emphysema",
      "Bronchial asthma",
      "Tuberculosis",
      "Pleural impairment",
      "Pulmonary edema"
    ],
    "answer": "Pleural impairment",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Pleural impairment\" as the target answer."
  },
  {
    "id": 65,
    "category": "Respiratory Pathophysiology",
    "question": "What is characteristic for obstructive pulmonary diseases? (3)",
    "options": [
      "Hyperventilation",
      "Decreased bronchial conductivity",
      "Increased bronchial resistance",
      "Decreased static lung volumes",
      "Decreased dynamic lung volumes"
    ],
    "answer": "Decreased bronchial conductivity",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: Decreased bronchial conductivity, Increased bronchial resistance, Decreased dynamic lung volumes."
  },
  {
    "id": 66,
    "category": "Respiratory Pathophysiology",
    "question": "The pathologic characteristics of bronchial asthma includes:",
    "options": [
      "Bronchospasm, bronchial edema, viscous mucus",
      "Peribronchial and interstitial infiltrate",
      "Alveolar and peribronchial destruction",
      "Recurrent bronchial epithelial necrosis",
      "Alveolar-capillary destruction"
    ],
    "answer": "Bronchospasm, bronchial edema, viscous mucus",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Bronchospasm, bronchial edema, viscous mucus\" as the target answer."
  },
  {
    "id": 67,
    "category": "Respiratory Pathophysiology",
    "question": "In manifested pulmonary failure the observed polycythemia is due to:",
    "options": [
      "Decreased lysis of red blood cells",
      "Increased red blood cell life",
      "Hypoxia-induced erythropoesis",
      "Dehydration and hemoconcentration",
      "Hypercapnia-dependent increased size of the red blood cells"
    ],
    "answer": "Hypoxia-induced erythropoesis",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Hypoxia-induced erythropoesis\" as the target answer."
  },
  {
    "id": 68,
    "category": "Pathophysiology",
    "question": "Restrictive ventilatory disturbance leads to:",
    "options": [
      "Cheyne-Stokes breathing",
      "Inhomogenous alveolar ventilation",
      "Decrease in the lung volumes",
      "Incomplete functional shunt",
      "Increase of the functional residual capacity"
    ],
    "answer": "Decrease in the lung volumes",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Decrease in the lung volumes\" as the target answer."
  },
  {
    "id": 69,
    "category": "Pathophysiology",
    "question": "What is the key pathogenetic unit of pneumothorax?",
    "options": [
      "Presence of air in the mediastinum",
      "Collapse of the alveoli",
      "Increased pleural resistance",
      "Presence of air in the pleural cavity",
      "Alveolar edema"
    ],
    "answer": "Presence of air in the pleural cavity",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Presence of air in the pleural cavity\" as the target answer."
  },
  {
    "id": 70,
    "category": "Respiratory Pathophysiology",
    "question": "What is the basic pathogenetic unit in the respiratory distress syndrome of the newborn:",
    "options": [
      "Immaturity of the surfactant",
      "Bronchiolar constriction",
      "Pleural fibrosis",
      "Alveolar edema",
      "Narrow airways"
    ],
    "answer": "Immaturity of the surfactant",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Immaturity of the surfactant\" as the target answer."
  },
  {
    "id": 71,
    "category": "Respiratory Pathophysiology",
    "question": "What is the key pathogenetic factor in the respiratory distress syndrome in adults?",
    "options": [
      "Bronchospasm and laryngospasm",
      "Alveolar hyperventilation",
      "Increased permeability of the alveolocapillary membrane",
      "Pulmonary hypertension",
      "Systemic hypertension"
    ],
    "answer": "Increased permeability of the alveolocapillary membrane",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Increased permeability of the alveolocapillary membrane\" as the target answer."
  },
  {
    "id": 72,
    "category": "Respiratory Pathophysiology",
    "question": "All of the following could lead to acute respiratory failure, except for one:",
    "options": [
      "Respiratory muscles paralysis",
      "Acute obstruction of the airways",
      "Respiratory center suppression",
      "Anemia and polycythemia",
      "Thoracic cage damages"
    ],
    "answer": "Anemia and polycythemia",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Anemia and polycythemia\" as the target answer."
  },
  {
    "id": 73,
    "category": "Respiratory Pathophysiology",
    "question": "Central respiratory failure occurs when:",
    "options": [
      "lung pathology",
      "pathology of the internal respiration system",
      "pathology of the respiratory center",
      "pathology of the respiratory muscles",
      "with pleural pathology"
    ],
    "answer": "pathology of the respiratory center",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"pathology of the respiratory center\" as the target answer."
  },
  {
    "id": 74,
    "category": "Respiratory Pathophysiology",
    "question": "An obstructive type of hypoventilation develops with:",
    "options": [
      "Damage to spinal cord motor neurons",
      "Limiting lung expansion during breathing",
      "Reduction of the pulmonary surface",
      "Airway obstruction",
      "Inhibition of the function of the respiratory center"
    ],
    "answer": "Airway obstruction",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"Airway obstruction\" as the target answer."
  },
  {
    "id": 75,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of respiratory failure occurs when:",
    "options": [
      "with pneumosclerosis",
      "with pneumonia",
      "with a fracture of the ribs",
      "with paralysis of the respiratory center",
      "with laryngospasm"
    ],
    "answer": "with laryngospasm",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"with laryngospasm\" as the target answer."
  },
  {
    "id": 76,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive respiratory failure develops as a result of:",
    "options": [
      "diffuse pulmonary fibrosis",
      "swelling of the airways",
      "airway obstruction",
      "spasm of the smooth muscles of the bronchi",
      "airway compression. pneumosclerosis"
    ],
    "answer": "diffuse pulmonary fibrosis",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"diffuse pulmonary fibrosis\" as the target answer."
  },
  {
    "id": 77,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation develops with:",
    "options": [
      "a decrease in the total lumen of the bronchi",
      "restriction of lung expansion during breathing",
      "reduction of the pulmonary surface",
      "violation of patency of the airways",
      "bronchial spasm"
    ],
    "answer": "restriction of lung expansion during breathing",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: restriction of lung expansion during breathing, reduction of the pulmonary surface."
  },
  {
    "id": 78,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive respiratory failure develops as a result of:",
    "options": [
      "airway edema",
      "surfactant deficiency",
      "spasm of the smooth muscles of the bronchi",
      "lung removal",
      "airway compression"
    ],
    "answer": "surfactant deficiency",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: surfactant deficiency, lung removal."
  },
  {
    "id": 79,
    "category": "Respiratory Pathophysiology",
    "question": "Asphyxia is:",
    "options": [
      "respiratory arrest",
      "and lengthening the breath",
      "difficulty and prolongation of exhalation",
      "lung hyperventilation",
      "acute respiratory failure"
    ],
    "answer": "acute respiratory failure",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"acute respiratory failure\" as the target answer."
  },
  {
    "id": 80,
    "category": "Respiratory Pathophysiology",
    "question": "Respiratory failure is characterized by:",
    "options": [
      "shortness of breath",
      "anemia",
      "cyanosis",
      "change in the pressure of O2 and CO2 in the blood",
      "change in acid-base state"
    ],
    "answer": "shortness of breath",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: shortness of breath, cyanosis, change in the pressure of O2 and CO2 in the blood, change in acid-base state."
  },
  {
    "id": 81,
    "category": "Respiratory Pathophysiology",
    "question": "Characterize breathing with inspiratory dyspnea:",
    "options": [
      "constant amplitude",
      "difficulty and prolonged inhalation",
      "difficulty and prolonged exhalation",
      "difficulty in inhaling and exhaling"
    ],
    "answer": "difficulty and prolonged inhalation",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"difficulty and prolonged inhalation\" as the target answer."
  },
  {
    "id": 82,
    "category": "Respiratory Pathophysiology",
    "question": "Characterize respiration during expiratory dyspnea:",
    "options": [
      "constant amplitude",
      "difficulty and prolonged inhalation",
      "difficulty and prolonged exhalation",
      "difficulty in inhaling and exhaling"
    ],
    "answer": "difficulty and prolonged exhalation",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"difficulty and prolonged exhalation\" as the target answer."
  },
  {
    "id": 83,
    "category": "Respiratory Pathophysiology",
    "question": "In what cases does the respiratory surface of the lungs decrease?",
    "options": [
      "with increased muscle work",
      "pneumothorax",
      "with croupous pneumonia",
      "with significant blood loss",
      "with lung atelectasis"
    ],
    "answer": "pneumothorax",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: pneumothorax, with croupous pneumonia, with lung atelectasis."
  },
  {
    "id": 84,
    "category": "Respiratory Pathophysiology",
    "question": "Centrogenic ventilation failure occurs when:",
    "options": [
      "lung diseases",
      "the pathology of internal breathing",
      "pathology of the respiratory center",
      "pathology of respiratory muscles",
      "pathology of pleura"
    ],
    "answer": "pathology of the respiratory center",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"pathology of the respiratory center\" as the target answer."
  },
  {
    "id": 85,
    "category": "Respiratory Pathophysiology",
    "question": "Inhibition of the respiratory center leads to:",
    "options": [
      "the diffusion form of respiratory failure",
      "ventilation form of respiratory failure",
      "perfusion form of respiratory failure",
      "obstructive type of violations of the pulmonary ventilation",
      "the valve mechanism of bronchial obstruction"
    ],
    "answer": "ventilation form of respiratory failure",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"ventilation form of respiratory failure\" as the target answer."
  },
  {
    "id": 86,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of hypoventilation develops at:",
    "options": [
      "reducing of the total lumen of bronchi",
      "the restriction of unfolding of the lungs during breathing",
      "decrease in pulmonary surface",
      "impaired patency of the airway",
      "inhibition of the function of the respiratory center"
    ],
    "answer": "reducing of the total lumen of bronchi",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: reducing of the total lumen of bronchi, impaired patency of the airway."
  },
  {
    "id": 87,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive respiratory failure may be due to:",
    "options": [
      "inhibition of the respiratory center",
      "pulmonary edema",
      "pulmonary emphysema",
      "spasm of smooth muscles of the diaphragm",
      "pulmonary fibrosis"
    ],
    "answer": "pulmonary emphysema",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"pulmonary emphysema\" as the target answer."
  },
  {
    "id": 88,
    "category": "Respiratory Pathophysiology",
    "question": "Obstructive type of hypoventilation occurs when:",
    "options": [
      "spasm of the bronchi and bronchioles",
      "thickening of the bronchial mucosa",
      "violation of the respiratory muscles",
      "laryngeal edema",
      "reduction of the respiratory surface of the lungs"
    ],
    "answer": "spasm of the bronchi and bronchioles",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: spasm of the bronchi and bronchioles, thickening of the bronchial mucosa, laryngeal edema."
  },
  {
    "id": 89,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive respiratory failure develops as a result of:",
    "options": [
      "diffuse pulmonary fibrosis",
      "airway edema",
      "obstructive airways disease",
      "spasm of bronchial smooth muscle",
      "compression of the airway"
    ],
    "answer": "diffuse pulmonary fibrosis",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"diffuse pulmonary fibrosis\" as the target answer."
  },
  {
    "id": 90,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation occurs when:",
    "options": [
      "laryngeal edema",
      "hypersecretion of the bronchial mucosa",
      "spasm of bronchioles",
      "strangulation",
      "pleuritis"
    ],
    "answer": "pleuritis",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"pleuritis\" as the target answer."
  },
  {
    "id": 91,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation develops when:",
    "options": [
      "reducing the total lumen of the bronchi",
      "restriction of the unfolding of the lungs during breathing",
      "reduction of pulmonary surface",
      "violation of patency of the airway",
      "spasm of bronchioles"
    ],
    "answer": "restriction of the unfolding of the lungs during breathing",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: restriction of the unfolding of the lungs during breathing, reduction of pulmonary surface."
  },
  {
    "id": 92,
    "category": "Respiratory Pathophysiology",
    "question": "Restrictive type of hypoventilation occurs when:",
    "options": [
      "laryngeal edema",
      "hypersecretion of the bronchial mucosa",
      "pulmonary edema",
      "pneumonia",
      "pleuritis"
    ],
    "answer": "pulmonary edema",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The multiple correct characteristics are: pulmonary edema, pneumonia, pleuritis."
  },
  {
    "id": 93,
    "category": "Pathophysiology",
    "question": "The distance for diffusion of gases can be increased:",
    "options": [
      "during hyperventilation",
      "in violation of the mechanics of breathing",
      "by increasing the number of functioning alveoli",
      "wnen fibrotic changes in the lungs",
      "the depression of the respiratory center"
    ],
    "answer": "wnen fibrotic changes in the lungs",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"wnen fibrotic changes in the lungs\" as the target answer."
  },
  {
    "id": 94,
    "category": "Pathophysiology",
    "question": "Bradypnea is observed at:",
    "options": [
      "lowering blood pressure",
      "depression of the respiratory center",
      "heart failure",
      "hypoxia",
      "pneumonia"
    ],
    "answer": "depression of the respiratory center",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"depression of the respiratory center\" as the target answer."
  },
  {
    "id": 95,
    "category": "Pathophysiology",
    "question": "Tachypnea is observed at:",
    "options": [
      "drug poisoning",
      "pneumonia",
      "edema of the larynx",
      "fever",
      "increase in blood pressure"
    ],
    "answer": "pneumonia",
    "explanation": "This is a classic question concerning pathophysiology. The multiple correct characteristics are: pneumonia, fever."
  },
  {
    "id": 96,
    "category": "Respiratory Pathophysiology",
    "question": "Periodic breathing is:",
    "options": [
      "breathing with changing the ratio between inhalation and exhalation",
      "alternating periods of breathing with periods of apnea",
      "rapid breathing",
      "breathing with varying amplitude",
      "respiratory arrest"
    ],
    "answer": "alternating periods of breathing with periods of apnea",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"alternating periods of breathing with periods of apnea\" as the target answer."
  },
  {
    "id": 97,
    "category": "Respiratory Pathophysiology",
    "question": "In the pathogenesis of periodic breathing is important:",
    "options": [
      "reducing the sensitivity of the respiratory center to CO2",
      "the increased sensitivity of the respiratory center to CO2",
      "stimulation of the respiratory center",
      "the constant stimulation of inspiratory neurons of the respiratory center",
      "reduction of the respiratory surface of the lungs"
    ],
    "answer": "reducing the sensitivity of the respiratory center to CO2",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"reducing the sensitivity of the respiratory center to CO2\" as the target answer."
  },
  {
    "id": 98,
    "category": "Pathophysiology",
    "question": "Biot’s respiration is:",
    "options": [
      "the alternation of apnea with respiratory movements that are growing by depth, and then decrease",
      "the alternation of apnea with respiratory movements of the same frequency and depth",
      "deep, rare respiratory movements",
      "deep, frequent respiratory movements",
      "gradually fading respiratory movements"
    ],
    "answer": "the alternation of apnea with respiratory movements of the same frequency and depth",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"the alternation of apnea with respiratory movements of the same frequency and depth\" as the target answer."
  },
  {
    "id": 99,
    "category": "Pathophysiology",
    "question": "Cheyne-Stokes respiration – is:",
    "options": [
      "the alternation of apnea with respiratory movements that are growing by depth, and then decrease",
      "the alternation of apnea with respiratory movements of the same frequency and depth",
      "deep, rare respiratory movements",
      "deep, frequent respiratory movements",
      "gradually fading respiratory movements"
    ],
    "answer": "the alternation of apnea with respiratory movements that are growing by depth, and then decrease",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"the alternation of apnea with respiratory movements that are growing by depth, and then decrease\" as the target answer."
  },
  {
    "id": 100,
    "category": "Respiratory Pathophysiology",
    "question": "Terminal breathing include breathing of:",
    "options": [
      "Biota",
      "Cheyne-Stokes",
      "external",
      "dissociated",
      "gasping"
    ],
    "answer": "gasping",
    "explanation": "This is a classic question concerning respiratory pathophysiology. The verified physiological concept confirms: \"gasping\" as the target answer."
  },
  {
    "id": 101,
    "category": "Cardiovascular & Hypertension",
    "question": "Systolic blood pressure is elevated when it is over:",
    "options": [
      "120mmHg",
      "130mmHg",
      "160mmHg",
      "140mmHg",
      "150mmHg"
    ],
    "answer": "140mmHg",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"140mmHg\" as the target answer."
  },
  {
    "id": 102,
    "category": "Cardiovascular & Hypertension",
    "question": "Diastolic blood pressure is elevated when it is over:",
    "options": [
      "80mmHg",
      "90mmHg",
      "95mmHg",
      "100mmHg",
      "110mmHg"
    ],
    "answer": "90mmHg",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"90mmHg\" as the target answer."
  },
  {
    "id": 103,
    "category": "Cardiovascular & Hypertension",
    "question": "Which factors are able to increase systemic blood pressure?",
    "options": [
      "Stroke volume of the heart",
      "Cardiac output",
      "Total peripheral vascular resistance (TPR)",
      "Activation of depressor factors",
      "Genetically, higher extracellular volume"
    ],
    "answer": "Cardiac output",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: Cardiac output, Total peripheral vascular resistance (TPR)."
  },
  {
    "id": 104,
    "category": "Cardiovascular & Hypertension",
    "question": "Blood pressure is increased when there is:",
    "options": [
      "Prevalence of pressor mechanisms",
      "Activation of pressor and depressor factors",
      "Insufficient depressor factors",
      "Pressor-depressor dissociation"
    ],
    "answer": "Prevalence of pressor mechanisms",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: Prevalence of pressor mechanisms, Insufficient depressor factors."
  },
  {
    "id": 105,
    "category": "Cardiovascular & Hypertension",
    "question": "Arterial hypertension is a condition of:",
    "options": [
      "Elevated blood pressure adequate to metabolic needs",
      "Form of adaptation to generalized hyperperfusion",
      "Functionally inadequate elevated blood pressure",
      "Form of maintaining blood flow in vital organs",
      "Circulatory overcompensation"
    ],
    "answer": "Functionally inadequate elevated blood pressure",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"Functionally inadequate elevated blood pressure\" as the target answer."
  },
  {
    "id": 106,
    "category": "Cardiovascular & Hypertension",
    "question": "What is the pathogenetic classification of arterial hypertension?",
    "options": [
      "Congenital and acquired",
      "Uncompensated and overcompensated",
      "Infectious and non-infectious",
      "Essential and symptomatic"
    ],
    "answer": "Essential and symptomatic",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"Essential and symptomatic\" as the target answer."
  },
  {
    "id": 107,
    "category": "Cardiovascular & Hypertension",
    "question": "Which factors play an important role in the genesis of essential hypertension?",
    "options": [
      "Acute infections",
      "Psychological traumas, stress",
      "Genetic predisposition",
      "Kidney diseases"
    ],
    "answer": "Psychological traumas, stress",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: Psychological traumas, stress, Genetic predisposition."
  },
  {
    "id": 108,
    "category": "Cardiovascular & Hypertension",
    "question": "The main pathogenetic unit of volume-dependent arterial hypertension is:",
    "options": [
      "Decreased renal excretion of sodium and water",
      "Increased sympathetic tone",
      "Lost baroreceptor depressor mechanism",
      "Genetically, higher extracellular volume",
      "Ineffective Darrow-Yannet mechanism"
    ],
    "answer": "Decreased renal excretion of sodium and water",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"Decreased renal excretion of sodium and water\" as the target answer."
  },
  {
    "id": 109,
    "category": "Cardiovascular & Hypertension",
    "question": "Arterial hypertension in atherosclerosis is a result of:",
    "options": [
      "Increased Na+ concentration in the blood",
      "Increased release of pressor factors",
      "Reduced elasticity of the large arterial vessels",
      "Increased pressor effect of the vasomotorcenter"
    ],
    "answer": "Increased Na+ concentration in the blood",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: Increased Na+ concentration in the blood, Reduced elasticity of the large arterial vessels."
  },
  {
    "id": 110,
    "category": "Endocrine System",
    "question": "The one hypertensive mechanism in hyperglucocorticism is:",
    "options": [
      "Peripheral blood vessels spasm",
      "Increased Na+ and water retention in the body",
      "Sensitization of the vascular wall to pressor factors",
      "Hypertrophy of the vascular wall",
      "Altered sensitivity of stretch- and chemoreceptors"
    ],
    "answer": "Increased Na+ and water retention in the body",
    "explanation": "This is a classic question concerning endocrine system. The multiple correct characteristics are: Increased Na+ and water retention in the body, Sensitization of the vascular wall to pressor factors."
  },
  {
    "id": 111,
    "category": "Endocrine System",
    "question": "The one hypertensive mechanism in glucocorticoid excess is:",
    "options": [
      "Peripheral blood vessels spasm",
      "Increased Na+ and water retention in the body",
      "Stimulation of angiotensinogen secretion by the liver",
      "Hypertrophy of the vascular wall",
      "Altered sensitivity of baro- and chemoreceptors"
    ],
    "answer": "Increased Na+ and water retention in the body",
    "explanation": "This is a classic question concerning endocrine system. The multiple correct characteristics are: Increased Na+ and water retention in the body, Stimulation of angiotensinogen secretion by the liver."
  },
  {
    "id": 112,
    "category": "Pathophysiology",
    "question": "Depressant substances include:",
    "options": [
      "Nitric oxide",
      "Angiotensin-II",
      "Aldosterone",
      "Endothelin",
      "Adrenaline"
    ],
    "answer": "Nitric oxide",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"Nitric oxide\" as the target answer."
  },
  {
    "id": 113,
    "category": "Cardiovascular & Hypertension",
    "question": "Secondary (symptomatic) arterial hypertension is one of the symptoms of diseases:",
    "options": [
      "liver",
      "gastrointestinal tract",
      "kidney",
      "spleen",
      "lungs"
    ],
    "answer": "kidney",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"kidney\" as the target answer."
  },
  {
    "id": 114,
    "category": "Cardiovascular & Hypertension",
    "question": "Crucial in the pathogenesis of renovascular renal hypertension is",
    "options": [
      "activation of the renin-angiotensin-aldosterone system",
      "increased secretion of glucocorticoids",
      "a decrease in the production of depressant substances in the kidneys",
      "increased secretion of adrenaline",
      "increased secretion of vasopressin"
    ],
    "answer": "activation of the renin-angiotensin-aldosterone system",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"activation of the renin-angiotensin-aldosterone system\" as the target answer."
  },
  {
    "id": 115,
    "category": "Cardiovascular & Hypertension",
    "question": "The pathogenesis of primary hypertension involves:",
    "options": [
      "Persistent increased irritability and hyperergy of the higher sympathetic nerve centers",
      "Prolonged inhibition of emotional centers",
      "Increased inhibitory effect of the cerebral cortex on the pressor centers",
      "Increased production of natriuretic hormone",
      "Insufficiency of the adrenal cortex"
    ],
    "answer": "Persistent increased irritability and hyperergy of the higher sympathetic nerve centers",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"Persistent increased irritability and hyperergy of the higher sympathetic nerve centers\" as the target answer."
  },
  {
    "id": 116,
    "category": "Cardiovascular & Hypertension",
    "question": "The pathogenesis of primary hypertension involves:",
    "options": [
      "the vascular endothelium",
      "a defective Na+-K+-2Cl co-transport system in the plasma membrane",
      "excess sodium intake and renal sodium retention",
      "sympathetic nervous hyperactivity",
      "renin-angiotensin system"
    ],
    "answer": "the vascular endothelium",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: the vascular endothelium, a defective Na+-K+-2Cl co-transport system in the plasma membrane, excess sodium intake and renal sodium retention, sympathetic nervous hyperactivity, renin-angiotensin system."
  },
  {
    "id": 117,
    "category": "Pathophysiology",
    "question": "Orthostatic hypotension (collapse) occurs when",
    "options": [
      "massive blood loss",
      "pancreatic crush",
      "rapid decrease in oxygen in the inhaled air",
      "intestinal infections",
      "a sharp transition from horizontal to vertical"
    ],
    "answer": "a sharp transition from horizontal to vertical",
    "explanation": "This is a classic question concerning pathophysiology. The verified physiological concept confirms: \"a sharp transition from horizontal to vertical\" as the target answer."
  },
  {
    "id": 118,
    "category": "Cardiovascular & Hypertension",
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
    "answer": "thyroid",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: thyroid, cerebro-ischemic, renal, adrenal."
  },
  {
    "id": 119,
    "category": "Cardiovascular & Hypertension",
    "question": "The term \"arterial hypertension\" means:",
    "options": [
      "a persistent increase in blood pressure: systolic above 140 mm Hg, diastolic - 90 mm Hg",
      "increase in blood pressure: systolic above 160 mm Hg, diastolic - 95 mm Hg, normalizing immediately after the cessation of the causative factor"
    ],
    "answer": "a persistent increase in blood pressure: systolic above 140 mm Hg, diastolic - 90 mm Hg",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The verified physiological concept confirms: \"a persistent increase in blood pressure: systolic above 140 mm Hg, diastolic - 90 mm Hg\" as the target answer."
  },
  {
    "id": 120,
    "category": "Cardiovascular & Hypertension",
    "question": "Indicate the probable causes of primary hypertension:",
    "options": [
      "hyperthyroidism",
      "chronic psycho-emotional overstrain",
      "chronic nephritis",
      "repeated lingering negative emotions",
      "atherosclerotic vascular disease",
      "genetic defects of the centers of the autonomic nervous system that regulate blood pressure"
    ],
    "answer": "chronic psycho-emotional overstrain",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: chronic psycho-emotional overstrain, repeated lingering negative emotions, atherosclerotic vascular disease, genetic defects of the centers of the autonomic nervous system that regulate blood pressure."
  },
  {
    "id": 121,
    "category": "Cardiovascular & Hypertension",
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
    "answer": "hyperergic sympathetic adrenal system",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: hyperergic sympathetic adrenal system, physical inactivity, hyperthyroidism, diabetes, obesity."
  },
  {
    "id": 122,
    "category": "Cardiovascular & Hypertension",
    "question": "Endocrine hypertension occurs when:",
    "options": [
      "total hypofunction of the adrenal cortex",
      "hyperfunction of the adrenal medulla",
      "hyperfunction of the glomerular zone of the adrenal cortex",
      "hypothyroidism",
      "pituitary cachexia",
      "thyrotoxicosis"
    ],
    "answer": "hyperfunction of the adrenal medulla",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: hyperfunction of the adrenal medulla, hyperfunction of the glomerular zone of the adrenal cortex, thyrotoxicosis."
  },
  {
    "id": 123,
    "category": "Cardiovascular & Hypertension",
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
    "answer": "congestive heart failure",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: congestive heart failure, heart hypertrophy, cardiosclerosis, stroke, hypertensive encephalopathy."
  },
  {
    "id": 124,
    "category": "Cardiovascular & Hypertension",
    "question": "Endocrine hypertension occurs when:",
    "options": [
      "total hypofunction of the adrenal cortex",
      "adrenal medulla hyperfunction",
      "hyperfunction of the glomerular zone of the adrenal cortex",
      "thyroid hypofunction",
      "thyrotoxicosis"
    ],
    "answer": "adrenal medulla hyperfunction",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: adrenal medulla hyperfunction, hyperfunction of the glomerular zone of the adrenal cortex, thyrotoxicosis."
  },
  {
    "id": 125,
    "category": "Cardiovascular & Hypertension",
    "question": "Risk factors for the development of essential hypertension are:",
    "options": [
      "overweight",
      "frequent stresses",
      "excessive salt intake",
      "active lifestyle",
      "physical inactivity"
    ],
    "answer": "overweight",
    "explanation": "This is a classic question concerning cardiovascular & hypertension. The multiple correct characteristics are: overweight, frequent stresses, excessive salt intake, physical inactivity."
  },
  {
    "id": 126,
    "category": "Gastrointestinal Tract",
    "question": "Examples of secretory diarrhea include : cholera + enzymes deficiency hormones elaborated by hormone-producing tumours +",
    "options": [
      "What definition of renal failure is more correct?",
      "it is such a change of renal function, which causes a disturbance of the state of the internal environment",
      "it is autointoxication of the organism that is associated primary with damage of the structural elements of the parenchyma by infectious or toxic factors",
      "Specify the types of renal failure:",
      "acute, chronic, complete, partial",
      "terminal, unilateral, bilateral",
      "What form of renal failure includes renal diabetes, cystinuria, phosphate diabetes which are caused by inheritance of the corresponding genetic defects?",
      "chronic",
      "acute",
      "terminal",
      "unilateral",
      "full",
      "bilateral",
      "Specify the causes of acute renal failure type of “shock kidney”:",
      "Crush syndrome, a disease occurring with uncontrollable vomiting and profuse diarrhea, leading to dehydration",
      "poisoning by carbon tetrachloride, bilateral obstruction of the urinary tract by stones",
      "Specify the reasons leading to acute renal failure type of “vascular obstruction”?",
      "acute glomerulonephritis, thrombosis and embolism of the renal arteries",
      "poisoning by vinegar essence",
      "prostate adenoma",
      "anaerobic infection",
      "Specify the reasons of acute renal failure type of “urological obstruction”?",
      "unilateral blockage of the urinary tract by stones",
      "Crush syndrome",
      "anaerobic infection",
      "acute glomerulonephritis",
      "Specify the stages of acute renal failure:",
      "oligo-anuric, initial, recovery of diuresis and polyuria, reconvalescence",
      "latent, prodromal, urogenic sepsis, uremic",
      "What is the stage of acute renal failure syndrome is characterized by development of uremia?",
      "oligo-anuric",
      "initial",
      "reconvalescence",
      "prodromal",
      "recovery of diuresis and polyuria",
      "What factors reduce the filtration in the renal glomerulus?",
      "reducing the hydrostatic pressure in the glomerular capillaries, increasing the oncotic pressure of the blood, increasing intrarenal pressure, reduction of the filtering surface",
      "increase in hydrostatic pressure in the glomerular capillaries, decreased oncotic pressure of the blood, reducing the intrarenal pressure, increased filtration surface",
      "How changes the hydrostatic pressure in the renal glomeruli when constriction of the renal artery and afferent arterioles?",
      "decreases",
      "increases",
      "How changes the filtration pressure when spasm of efferent arterioles?",
      "rises",
      "decreases",
      "Diffuse glomerulonephritis is accompanied by:",
      "increased permeability of glomerular basement membrane",
      "decrease in the permeability of the glomerular basement membrane",
      "Acute diffuse glomerulonephritis is accompanied by increase in glomerular filtration process?",
      "no",
      "yes",
      "What changes reduce the hydrostatic pressure in the renal glomeruli?",
      "decreased blood pressure, decreased cardiac output, decrease in blood volume, decreased plasma volume",
      "increased blood pressure, increased cardiac output, increased blood volume, increased plasma volume",
      "What factors contribute to increased water reabsorption in the renal tubules?",
      "increased production of ADH, increased sensitivity of epithelium of the renal tubules to ADH, increase of reabsorption of the osmotically active substances from tubules",
      "the decrease in production of ADH, reducing the sensitivity of epithelium of the renal tubules to ADH, reducing reabsorption of osmotically active substances from tubules",
      "What are the factors directly related to the defeat of tubular apparatus of the kidney in acute renal failure?",
      "infectious-toxic, hypoxia of the nephron, action of metabolites and breakdown of tissues (myoglobin, hemoglobin, etc.)",
      "impaired renal lymph circulation, increase in intrarenal pressure",
      "What is determined by larger degree of decreased urine output than the degree of reduction of glomerular filtration at background isostenuria in oligo- anuric stage of acute renal failure?",
      "that oliguria in acute renal failure is associated not only with the change of filtration, but also with the development non-selective resorption of the ultrafiltrate of tubules",
      "that the crucial in the development of oliguria in acute renal failure belongs to a violation of resorption of the tubular ultrafiltrate",
      "What factors reduce renal blood flow in the early stages of the action of nephrotic poisons?",
      "all of the right",
      "reduction in energy production in the cells of tubular epithelium",
      "reduction of tubular sodium reabsorption",
      "an increase in renin production",
      "increasing the tonus of afferent arterioles of renal glomeruli",
      "What factors can cause anuria?",
      "severe trauma, significant pain stimuli, bend or compression of the ureters",
      "denervation of the kidney, a drop of hydrostatic pressure in glomerular capillaries up to 50 mm Hg",
      "What factors can cause a hyponatriuresis?",
      "increased production of aldosterone, decrease in glomerular filtration rate, an increase in the sensitivity of cells of the tubules to the aldosterone",
      "increase in glomerular filtration rate, a decrease in aldosterone production, reducing the sensitivity of cells of the tubules to the aldosterone",
      "What changes lead to a decrease in sodium reabsorption in the renal tubules?",
      "decrease in aldosterone production",
      "decrease in glomerular filtration rate",
      "increase in glomerular filtration rate",
      "increased production of aldosterone",
      "increase in the sensitivity of cells of the tubules to the aldosterone",
      "The combination of hypostenuria with polyuria indicates on the primary lesion of the nephron structures, such as:",
      "tubules",
      "glomerulus",
      "Reducing the elimination from the body of the urea and creatinine leads to:",
      "hyperasotemia",
      "diselectrolytemia",
      "acidosis",
      "What violations of plasma are typical for oligo-anuric stage of acute renal failure?",
      "hyponatremia, hyperkalemia, hypermagnesemia",
      "hypernatremia, hypokalemia, hypomagnesemia",
      "Hyperkalemia in acute renal failure is associated with violation of processes such as:",
      "filtration and secretion of potassium, increased protein catabolism",
      "filtration and reabsorption of potassium, reabsorption and secretion of potassium, increased protein anabolism processes",
      "What are the factors associated with the development of hyponatremia in the third stage of acute renal failure?",
      "increasing sodium excretion from the body, thinning (hemodilution) of blood, increased transition sodium from the extracellular space into the cell",
      "sharp drop of its filtration in third stage of acute renal failure, output of sodium from cells to the extracellular space, delay of potassium in the body",
      "Hyponatremia in acute renal failure leads to:",
      "intracellular hyperhydration",
      "intracellular dehydration",
      "What is the reason of hyponatremia in chronic renal failure?",
      "decrease in the sensitivity of the epithelium to the aldosterone, increased filtration rate of sodium in the functioning glomeruli",
      "decrease in the sensitivity of the epithelium to the ADH, decrease in the rate of filtration of sodium in functioning glomeruli",
      "Can extra- as well as intracellular hyperhydration develop when acute renal failure and chronic renal failure?",
      "yes",
      "no",
      "What is the reason of the acidosis in renal failure?",
      "reduction in the secretion of hydrogen ions in the tubules, decrease in filtration of phosphates, increased loss of bicarbonates",
      "increased secretion of hydrogen ions in the tubules, increased filtration of phosphates, decreased excretion of bicarbonates",
      "What accounts for dyspepsia (loss of appetite, nausea, vomiting, diarrhea) in chronic renal failure and uremia?",
      "diselectrolytemia, increased formation of ammonia in the gut",
      "acidosis",
      "Uremia is characterized by:",
      "anemia, leukocytosis, thrombocytopenia, hypocalcemia",
      "polycythemia, leukopenia, increase of platelets per unit volume of blood, hypercalcemia",
      "Specify the reasons of the prerenal form of acute renal failure:",
      "cardiogenic shock",
      "acute glomerulonephritis",
      "thrombosis and embolism of renal vessels",
      "acute pyelonephritis",
      "How changes the diuresis with a decrease in reabsorption of glucose in the renal tubules?",
      "rises",
      "decreases",
      "The tubular acidosis is a consequence of changes in the function of the nephron:",
      "tubular secretion",
      "glomerular filtration",
      "tubular reabsorption",
      "How changes filtration when selective increase in tonus efferent arterioles of renal glomeruli?",
      "is incremented",
      "decreases",
      "How changes the hydrostatic pressure in capillaries of the renal glomeruli when increases in tonus of afferent arterioles?",
      "decreases",
      "increases",
      "How changes the diuresis when decreases of reabsorption of glucose in the renal tubules?",
      "is incremented",
      "decreases",
      "What is the leading pathogenetic factor of prerenal form of acute renal failure?",
      "inhibition of systemic hemodynamics",
      "primary damage of the nephron",
      "difficulty of removing of urine from urinary tract",
      "Which are pathogenetic factors lead to reduction of renal blood flow in the development of prerenal form of acute renal failure?",
      "hypovolemia, increased tonus of afferent arterioles, violation of hemorheological properties of blood",
      "hypervolemia, lowering tonus of afferent arterioles",
      "Indicate the correct variant of transhypophysial regulation of the endocrine glands:",
      "cortex - hypothalamus-pituitary gland - peripheral gland",
      "the cerebral cortex is the peripheral gland",
      "the cerebral cortex - the hypothalamus - nerve conductors - peripheral glands",
      "cortex - pituitary gland - hypothalamus - peripheral gland",
      "subcortical centers - nerve conduits - peripheral gland",
      "Transhypophysial regulation is fundamental to:",
      "thyroid gland",
      "gonads",
      "adrenal cortex",
      "pancreas",
      "parathyroid glands",
      "Hormone metabolism is impaired in diseases of:",
      "liver",
      "the spleen",
      "hearts",
      "lungs",
      "nervous system",
      "Peripheral (non-glandular) mechanism of hormone activity disturbance is:",
      "blockade of hormonal receptors",
      "deficiency of substrates for the formation of hormones",
      "inherited defect of hormone biosynthesis enzymes",
      "adenoma of the neurosecretory cells of the hypothalamus",
      "congenital malformations of the glands",
      "With eosinophilic pituitary adenoma, during the growth period of the body, it develops:",
      "gigantism",
      "acromegaly",
      "dysplasia",
      "pituitary dwarfism",
      "Itsenko-Cushing's disease",
      "A decrease in the production of adrenocorticotropic hormone leads to:",
      "decrease the synthesis of hormones of the adrenal cortex",
      "a decrease in insulin synthesis",
      "decrease the synthesis of hormones of the adrenal medulla",
      "increased synthesis of thyroid hormones",
      "increased synthesis of sex hormones",
      "Excessive production of adrenocorticotropic hormone leads to increased secretion:",
      "cortisol",
      "insulin",
      "parathyroid hormone",
      "thyroxin",
      "Hypoproduction of growth hormone at a young age manifests itself in the form:",
      "pituitary dwarfism",
      "acromegaly",
      "pituitary cachexia",
      "adiposogenital dystrophy",
      "pituitary gigantism",
      "The development of diabetes insipidus is due to:",
      "hyposecretion of vasopressin",
      "hypersecretion of vasopressin",
      "hypersecretion of aldosterone",
      "hypersecretion of aldosterone",
      "the presence of insulin antagonists in the blood",
      "The cause of Addison's disease is most often:",
      "adrenal atrophy",
      "hypertrophy of the adrenal glands",
      "pituitary tumor",
      "autoimmune thyroiditis",
      "pineal gland hyperplasia",
      "With insufficient iodine in food develops:",
      "endemic goiter",
      "autoimmune thyroiditis",
      "hyperthyroidism",
      "hypoparathyroidism",
      "diffuse toxic goiter",
      "In severe cases, hypothyroidism in adults provides development:",
      "myxedema",
      "cretinism",
      "eunuchoidism",
      "dwarf dwarfism",
      "hypergonadism",
      "Hypoparathyroidism occurs with pathology:",
      "parathyroid glands",
      "gonads",
      "thyroid gland",
      "thymus gland",
      "pancreas",
      "Which endocrine disorder is defined as secondary/tertiary?",
      "it is a result of an increased releasing factors level",
      "it is a result of an impaired tropic hormones regulation",
      "pathological process in a certain endocrine gland",
      "it is a result of genetic defect in the gland",
      "Tachycardia in hyperthyroidism is a result of:",
      "increased sympathetic activation",
      "blocked parasympathetic activation",
      "increased cardiac afterload",
      "decreased cardiac preload",
      "malignant hyperthermia",
      "The pathogenesis of chronic hypocorticism is associated with decreased levels of:",
      "GCS",
      "MCS",
      "suprarenal sex hormones",
      "catecholamines",
      "The biological effects of STH could be diminished in a deficiency of:",
      "somatoliberins",
      "somatostatins",
      "somatomedins",
      "prostaglandins",
      "leukotriens",
      "What is the cause of primary diabetes insipidus?",
      "damage in the hypothalamus and hypophysis",
      "hereditary defect of the adh receptors in the renal tubules",
      "acquired defect of the adh receptors in the renal tubules",
      "hyperplasia of the epiphysis",
      "atrophy in substantia nigra",
      "Pheochromocytoma leads to:",
      "elevated catecholamines",
      "elevated aldosterone",
      "increased level of tropic hormones",
      "decreased level of catecholamines"
    ],
    "answer": "it is such a change of renal function, which causes a disturbance of the state of the internal environment",
    "explanation": "This is a classic question concerning gastrointestinal tract. The multiple correct characteristics are: it is such a change of renal function, which causes a disturbance of the state of the internal environment, acute, chronic, complete, partial, chronic, Crush syndrome, a disease occurring with uncontrollable vomiting and profuse diarrhea, leading to dehydration, acute glomerulonephritis, thrombosis and embolism of the renal arteries, unilateral blockage of the urinary tract by stones, oligo-anuric, initial, recovery of diuresis and polyuria, reconvalescence, oligo-anuric, reducing the hydrostatic pressure in the glomerular capillaries, increasing the oncotic pressure of the blood, increasing intrarenal pressure, reduction of the filtering surface, decreases, rises, increased permeability of glomerular basement membrane, no, decreased blood pressure, decreased cardiac output, decrease in blood volume, decreased plasma volume, increased production of ADH, increased sensitivity of epithelium of the renal tubules to ADH, increase of reabsorption of the osmotically active substances from tubules, infectious-toxic, hypoxia of the nephron, action of metabolites and breakdown of tissues (myoglobin, hemoglobin, etc.), that oliguria in acute renal failure is associated not only with the change of filtration, but also with the development non-selective resorption of the ultrafiltrate of tubules, all of the right, severe trauma, significant pain stimuli, bend or compression of the ureters, increased production of aldosterone, decrease in glomerular filtration rate, an increase in the sensitivity of cells of the tubules to the aldosterone, decrease in aldosterone production, tubules, hyperasotemia, hyponatremia, hyperkalemia, hypermagnesemia, filtration and secretion of potassium, increased protein catabolism, increasing sodium excretion from the body, thinning (hemodilution) of blood, increased transition sodium from the extracellular space into the cell, intracellular hyperhydration, decrease in the sensitivity of the epithelium to the aldosterone, increased filtration rate of sodium in the functioning glomeruli, yes, reduction in the secretion of hydrogen ions in the tubules, decrease in filtration of phosphates, increased loss of bicarbonates, diselectrolytemia, increased formation of ammonia in the gut, anemia, leukocytosis, thrombocytopenia, hypocalcemia, cardiogenic shock, rises, tubular secretion, is incremented, decreases, is incremented, inhibition of systemic hemodynamics, hypovolemia, increased tonus of afferent arterioles, violation of hemorheological properties of blood, cortex - hypothalamus-pituitary gland - peripheral gland, thyroid gland, gonads, adrenal cortex, liver, blockade of hormonal receptors, gigantism, decrease the synthesis of hormones of the adrenal cortex, cortisol, pituitary dwarfism, hyposecretion of vasopressin, adrenal atrophy, endemic goiter, myxedema, parathyroid glands, it is a result of an increased releasing factors level, it is a result of an impaired tropic hormones regulation, increased sympathetic activation, GCS, MCS, somatoliberins, damage in the hypothalamus and hypophysis, elevated catecholamines."
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
