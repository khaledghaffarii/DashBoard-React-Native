import React, { useState, useEffect } from "react";
import { Block, Input } from "../components";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, TextInput, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar } from "../Victory";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function ProjectShow({ navigation }) {
  const [updatedDate, setUpdatedDate] = useState("");
  const [errorUpdatedDate, setErrorUpdatedDate] = useState("");
  /////////////////// Diver Constant  /////////////////////////////

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "white",
    fillShadowGradient: "green",
    fillShadowGradientOpacity: 2,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 15) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 6,
    barPercentage: 1.2,
    useShadowColorFromDataset: false,
  };

  ///////////////// SHOW &&  HIDE /////////////////////////////

  const [ShowDate, setShowDate] = useState(false);
  const [onProject, setOnProject] = useState([]);
  const [ShowIng, setShowIng] = useState(false);

  /// section
  const [firstPage, setFirstPage] = useState(true);
  const [ChoiceSection, setChoiceSection] = useState(true);
  const [ShowEngSection, setShowEngSection] = useState(false);
  const [ShowProSection, setShowProSection] = useState(false);
  const [ShowConstSection, setShowConstSection] = useState(false);

  /// details
  const [ShowMdr, setShowMdr] = useState(false);
  const [ShowPtr, setShowPtr] = useState(false);
  const [ShowConst, setShowConst] = useState(false);

  /////////////////// Facturation Previsionnel &&  Facturation  Reel ///////////////////////////////////////////////////////////

  const [FactPrev, setFactPrev] = useState(0);
  const [EncPrev, setEncPrev] = useState(0);

  const [FactReel, setFactReel] = useState(0);
  const [EncReel, setEncReel] = useState(0);

  /////////////////////////////////// Progress //////////////////////////////////////////////////
    const [dataDisip, setDataDisip] = useState("");
  //////////// Planned //////////////

      console.table(dataDisip);

  const [initialDatePl, setInitialDatePl] = useState("");
  const [finalDatePl, setFinalDatePl] = useState("");

  //////////// Actual ///////////////////

  const [initialDateAct, setInitialDateAct] = useState("");
  const [finalDateAct, setFinalDateAct] = useState("");

  ////////////// Total_Float ///////////////

  const [TotalFloat, setTotalFloat] = useState(0);

  ////////////// Title ///////////////////////
  const [DisipTitle, setDisipTitle] = useState("");

  ////////////////////////// Total_Avancement pl && act  ////////////////////////

  const [TotalAvPl, setTotalAvPl] = useState(0);
  const [TotalAvAct, setTotalAvAct] = useState(0);

  //////////////////////////////////// Markup  ///////////////////////////////////////////////////////////

  const [markupPl, setMarkupPl] = useState(0);
  const [markupAct, setMarkupAct] = useState(0);

  //////////////////////////////////// M  D  R  ///////////////////////////////////////////////////////////

  //////////// IFR //////////////
  const [dateIfrAct, setDateIfrAct] = useState("");
  const [dateIfrPl, setDateIfrPl] = useState("");

  //console.table(dateIfrPl, dateIfrAct);

  const dataIFR = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfrPl }],
    actual: [{ x: 3.5, y: dateIfrAct }],
  };
  const IFRdata = [
    {
      name: "Current",
      population: dateIfrAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfrPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //////////////////  IFA ///////////////////////

  const [dateIfaPl, setDateIfaPl] = useState("");
  const [dateIfaAct, setDateIfaAct] = useState("");

  // console.table(dateIfaPl, dateIfaAct);
  const dataIFA = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfaPl }],
    actual: [{ x: 3.5, y: dateIfaAct }],
  };
  const IFAdata = [
    {
      name: "Current",
      population: dateIfaAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfaPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  ////////////////////  IFC   /////////////////////

  const [dateIfcAct, setDateIfcAct] = useState("");
  const [dateIfcPl, setDateIfcPl] = useState("");

  const dataIFC = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfcPl }],
    actual: [{ x: 3.5, y: dateIfcAct }],
  };
  const IFCdata = [
    {
      name: "Current",
      population: dateIfcAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfcPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //////////////////////////////////// P  T  R  ///////////////////////////////////////////////////////////
  ////////////////////  RFQ   /////////////////////
  const [dateRfqAct, setDateRfqAct] = useState("");
  const [dateRfqPl, setDateRfqPl] = useState("");

  const dataRFQ = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateRfqPl }],
    actual: [{ x: 3.5, y: dateRfqAct }],
  };
  const RFQdata = [
    {
      name: "Issu To Company",
      population: dateRfqPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Forecast",
      population: dateRfqAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
  ];
  ////////////////////  TEC   /////////////////////

  const [dateTecPl, setDateTecPl] = useState("");
  const [dateTecAct, setDateTecAct] = useState("");

  const dataTEC = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateTecPl }],
    actual: [{ x: 3.5, y: dateTecAct }],
  };
  const TECdata = [
    {
      name: "Received.Date",
      population: dateTecPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
    {
      name: "Scope Reply",
      population: dateTecAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
  ];
  ////////////////////  POS   /////////////////////

  const [datePosAct, setDatePosAct] = useState("");
  const [datePosPl, setDatePosPl] = useState("");

  const dataPOS = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: datePosPl }],
    actual: [{ x: 3.5, y: datePosAct }],
  };
  const POSdata = [
    {
      name: "PO_Planed Date",
      population: datePosAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "PO_Issue Date",
      population: datePosPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];
  //////////////////////////////////// S  T  R  ///////////////////////////////////////////////////////////
  const [plEta, setPlEta] = useState("");
  const [ActAta, setActAta] = useState("");

  //console.log(ActAta);
  const data_STR = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plEta }],
    actual: [{ x: 3.5, y: ActAta }],
  };
  const STR_data = [
    {
      name: "ATA_Site",
      population: ActAta,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "ETA_Site",
      population: plEta,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  ////////////////////////////////////////E  T  R ///////////////////////////////////////////////////////////////////////////////////

  ////////////////// INSPECTION ////////////////////////
  const [plInspection, setPlInspection] = useState("");
  const [factInspection, setFactInspection] = useState("");

  const data_INSPECTION = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plInspection }],
    actual: [{ x: 3.5, y: factInspection }],
  };
  const INSPECTION_data = [
    {
      name: "Current",
      population: factInspection,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      //
      name: "Planned",
      population: plInspection,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //////////////////// FOB ////////////////////////

  const [plFob, setPlFob] = useState("");
  const [factFob, setFactFob] = useState("");

  const data_FOB = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plFob }],
    actual: [{ x: 3.5, y: factFob }],
  };
  const FOB_data = [
    {
      name: "Current",
      population: factFob,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: plFob,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://localhost:3000/mdr/projectId");
      const project = await res.json();

      var ProjectId = project.map(function (projects) {
        return projects["ID"];
      });

      setOnProject(ProjectId);
    }

    //////////////////////////////////// Facturation Previsionnel && Reel  ///////////////////////////////////////////////////////////

    async function fetchDataFactPrev() {

        const res = await fetch(
          "https://localhost:3000/factPrev/" + navigation.getParam("id")
        );
        const project = await res.json();
        //console.table(project);
        var totalmfp = project.map(function (projects) {
          return projects["totalmfp"];
        });
        var totalmep = project.map(function (projects) {
          return projects["totalmep"];
        });

        setFactPrev(totalmfp);

        setEncPrev(totalmep);

    }

    async function fetchDataFactReel() {
      const res = await fetch(
        "https://localhost:3000/factReel/" + navigation.getParam("id")
      );
      const project = await res.json();

     // console.table(project);

      var totalmfr = project.map(function (projects) {
        return projects["totalmfr"];
      });
      var totalmer = project.map(function (projects) {
        return projects["totalmer"];
      });

      setFactReel(totalmfr);
      setEncReel(totalmer);
    }

    //////////////////////////////////// Progress ///////////////////////////////////////////////////////////
    async function fetchDataDisip() {
      try {
        const res = await fetch(
          "https://127.0.0.1:3000/progress/" + navigation.getParam("id")
        );
        const project = await res.json();
        setDataDisip(project);
        console.table(project);                   
      } catch (error) {
        console.log(error);
      }
    }
    async function callAPI() {
        try {
          await fetchDataDisip();
        } catch (e) {
          console.log(e);
        }
    }
    // async function fetchDataProgress() {
    //   const res = await fetch(
    //     "https://localhost:3000/progress/" + navigation.getParam("id")
    //   );
    //   const project = await res.json();
    //   console.table(project);
    //   //////////////////// TitleDisip //////////////////

    //   // const [DisipTitle, setDisipTitle] = useState("");

    //   var descdisci = project.map(function (projects) {
    //     return projects["descdisci"];
    //   });
    //   setDisipTitle(descdisci);
    //   //console.log(descdisci[0]);
      
    //   /////////////////// Planned ////////////////////////


    //   var datedebutpla = project.map(function (projects) {
    //     return projects["datedebutpla"].slice(0, 10);
    //   });

    //   var datedefinpla = project.map(function (projects) {
    //     //console.log(projects["datedebutpla"])
    //     return projects["datedefinpla"].slice(0, 10);
    //   });

    //   console.log(datedefinpla[0]);

    //   setInitialDatePl(datedebutpla);
    //   setFinalDatePl(datedefinpla);


    //   ////////////////// Actual ////////////////////////

    //   var datedebutactu = project.map(function (projects) {
    //     return projects["datedebutactu"].slice(0, 10);
    //   });
    //   var datedefinactu = project.map(function (projects) {
    //     return projects["datedefinactu"].slice(0, 10);
    //   });

    //   setInitialDateAct(datedebutactu);
    //   setFinalDateAct(datedefinactu);

    //   ////////////////////////// Total_Float  ////////////////////////

    //   var totalfloat = project.map(function (projects) {
    //     return projects["totalfloat"];
    //   });
    //   setTotalFloat(totalfloat);
    //   ////////////////////////// Total_Avancement pl && act  ////////////////////////

    //   var totalavanp = project.map(function (projects) {
    //     return projects["totalavanp"];
    //   });
    //   var totalavanac = project.map(function (projects) {
    //     return projects["totalavanac"];
    //   });
    //   setTotalAvPl(totalavanp);
    //   setTotalAvAct(totalavanac);
    // }

    ///////////////////////////////////////  Markup  ////////////////////////////////////////////////////////

    async function fetchDataMarkup() {
      const res = await fetch(
        "https://localhost:3000/markup/" + navigation.getParam("id")
      );
      const project = await res.json();
      //console.table(project);

      var markupinit = project.map(function (projects) {
        return projects["markupinit"];
      });
      var markupactu = project.map(function (projects) {
        return projects["markupactu"];
      });

      setMarkupPl(markupinit);
      setMarkupAct(markupactu);
    }

    ////////////////////////////////////  M  D  R  ///////////////////////////////////////////////////////////

    async function fetchDataMdr() {
      const res = await fetch(
        "https://localhost:3000/mdr/" + navigation.getParam("id")
      );
      const project = await res.json();

      /////////  IFR //////////////////////

      var dateplifr = project.map(function (projects) {
        return projects["dateplifr"];
      });
      var dateactifr = project.map(function (projects) {
        return projects["dateactifr"];
      });

      setDateIfrPl(dateplifr.filter((n) => n == 0 || n).length);
      setDateIfrAct(dateactifr.filter((n) => n == 0 || n).length);

      /////////  IFA  //////////////////////

      var dateplifa = project.map(function (projects) {
        return projects["dateplifa"];
      });
      var dateactifa = project.map(function (projects) {
        return projects["dateactifa"];
      });

      setDateIfaPl(dateplifa.filter((n) => n == 0 || n).length);
      setDateIfaAct(dateactifa.filter((n) => n == 0 || n).length);

      ////////////  IFC  /////////////

      var dateplb = project.map(function (projects) {
        return projects["dateplb"];
      });
      var dateactb = project.map(function (projects) {
        return projects["dateactb"];
      });

      setDateIfcPl(dateplb.filter((n) => n == 0 || n).length);
      setDateIfcAct(dateactb.filter((n) => n == 0 || n).length);
    }

    //////////////////////////////////// P  T  R  ///////////////////////////////////////////////////////////

    async function fetchDataPtr() {
      const res = await fetch(
        "https://localhost:3000/ptr/" + navigation.getParam("id")
      );

      const project = await res.json();
      
      /////////////////////  R F Q //////////////////

      var rfqforecast = project.map(function (projects) {
        return projects["rfqforecast"];
      });
      var rfqissuetocompany = project.map(function (projects) {
        return projects["rfqissuetocompany"];
      });
      setDateRfqPl(rfqforecast.filter((n) => n == 0 || n).length);
      setDateRfqAct(rfqissuetocompany.filter((n) => n == 0 || n).length);

      /////////////////////  T E Q //////////////////

      var receivedofferdate = project.map(function (projects) {
        return projects["receivedofferdate"];
      });
      var bescopereply = project.map(function (projects) {
        return projects["bescopereply"];
      });
      setDateTecPl(receivedofferdate.filter((n) => n == 0 || n).length);
      setDateTecAct(bescopereply.filter((n) => n == 0 || n).length);

      /////////////////////  P O S //////////////////
      var poplanned = project.map(function (projects) {
        return projects["poplanned"];
      });
      var poissuedate = project.map(function (projects) {
        return projects["poissuedate"];
      });
      setDatePosPl(poplanned.filter((n) => n == 0 || n).length);
      setDatePosAct(poissuedate.filter((n) => n == 0 || n).length);
    }
    //////////////////////////////////// S  T  R  ///////////////////////////////////////////////////////////
    async function fetchDataStr() {
      const res = await fetch(
        "https://localhost:3000/str/" + navigation.getParam("id")
      );
      const project = await res.json();
      //console.table(project);
      var eta = project.map(function (projects) {
        return projects["eta"];
      });
      var ata = project.map(function (projects) {
        return projects["ata"];
      });
      setPlEta(eta.filter((n) => n == 0 || n).length);
      setActAta(ata.filter((n) => n == 0 || n).length);
    }
    //////////////////////////////////// E  T  R  ///////////////////////////////////////////////////////////
    async function fetchDataEtr() {
      const res = await fetch(
        "https://localhost:3000/etr/" + navigation.getParam("id")
      );
      const project = await res.json();
      // console.table(project);
      ///////////////////////INSPECTION //////////////////////////////////

      var plan = project.map(function (projects) {
        return projects["plan"];
      });
      var factbyeppm = project.map(function (projects) {
        return projects["factbyeppm"];
      });
      setPlInspection(plan.filter((n) => n == 0 || n).length);
      setFactInspection(factbyeppm.filter((n) => n == 0 || n).length);
      /////////////////////// F O B //////////////////////////////////

      var fobplan = project.map(function (projects) {
        return projects["fobplan"];
      });
      var fobfact = project.map(function (projects) {
        return projects["fobfact"];
      });
      setPlFob(fobplan.filter((n) => n == 0 || n).length);
      setFactFob(fobfact.filter((n) => n == 0 || n).length);
    }
    callAPI();
    fetchDataFactReel();
    fetchDataFactPrev();
    fetchDataMarkup();
    //fetchDataProgress();
    fetchDataEtr();
    fetchDataStr();
    fetchDataPtr();
    fetchDataMdr();
    fetchData();
  }, []);

  function HandleDateChange(e) {
    setUpdatedDate(e.target.value);
  }
  function HandleShowDate() {
    setShowDate(true);
  }

  ///Section
  function HandleHideFirstPage() {
    setFirstPage(false);
  }
  function HandleShowFirstPage() {
    setFirstPage(true);
    setShowConst(false);
    setShowConstSection(false);
  }
  function HandleShowEngeenier() {
    setShowConstSection(false);
    setChoiceSection(true);
    setShowMdr(false);
    setShowProSection(false);
    setShowPtr(false);
  }
  function HandleHideEngeenier() {
    setChoiceSection(false);
    setShowEngSection(true);
  }
  function HandleShowProcurement() {
    setShowEngSection(false);
    setShowProSection(true);
    setChoiceSection(false);
    setShowMdr(false);
  }
  function HandleShowConstruction() {
    setShowConst(false);
    setShowConstSection(true);
    setChoiceSection(false);
    setShowEngSection(false);
    setShowProSection(false);
  }

  ///Details
  function HandleShowDetailsProcurement() {
    setShowPtr(true);
    setShowMdr(false);
    setShowProSection(false);
    setShowEngSection(false);
    setChoiceSection(false);
    setShowMdr(false);
  }
  function HandleShowDetailsEngineering() {
    setShowMdr(true);
    setFirstPage(false);
    setChoiceSection(false);
    setShowEngSection(false);
    setShowProSection(false);
  }
  function HandleShowDetailsConstruction() {
    setShowConst(true);
    setShowConstSection(false);
    setFirstPage(false);
    setChoiceSection(false);
    setShowEngSection(false);
    setShowProSection(false);
  }

  ///Back
  function HandleBackEngSection() {
    setShowMdr(false);
    setShowEngSection(true);
    setChoiceSection(false);
    setShowConstSection(false);
  }
  function HandleBackProSection() {
    setShowProSection(true);
    setShowConstSection(false);
    setShowPtr(false);
    setShowEngSection(false);
    setChoiceSection(false);
    setShowMdr(false);
  }
  function HandleBackConstructSection() {
    setShowConst(false);
    setShowConstSection(true);
    setShowPtr(false);
    setShowEngSection(false);
    setChoiceSection(false);
    setShowMdr(false);
  }

  return (
    <div>
      <View style={styles.Header}>
        {firstPage ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Project")}
            style={{ marginBottom: 5 }}
          />
        ) : null}
        {!firstPage && ChoiceSection ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={HandleShowFirstPage}
            style={{ marginBottom: 5 }}
          />
        ) : null}
        {/* Back to choiceSection  */}
        {!ChoiceSection && !ShowMdr && !ShowPtr && !ShowConst ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={HandleShowEngeenier}
            style={{ marginBottom: 5 }}
          />
        ) : null}
        {/* Back to EngSection  */}
        {!ChoiceSection && !ShowEngSection && ShowMdr && !ShowPtr ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={HandleBackEngSection}
            style={{ marginBottom: 5 }}
          />
        ) : null}
        {/* Back to proSection  */}
        {!ChoiceSection && !ShowProSection && ShowPtr && !ShowMdr ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={HandleBackProSection}
            style={{ marginBottom: 5 }}
          />
        ) : null}
        {/* Back to constSection  */}
        {!ChoiceSection && !ShowConstSection && ShowConst && !ShowPtr ? (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={HandleBackConstructSection}
            style={{ marginBottom: 5 }}
          />
        ) : null}

        <Text style={{ marginLeft: 60, fontWeight: "bold", fontSize: 15 }}>
          {navigation.getParam("projectname")}
        </Text>
      </View>
      {firstPage ? (
        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder=" Enter Date :  YYYY-MM-DD"
              underlineColorAndroid="transparent"
              //style={{ paddingLeft: 15 }}
              onChange={HandleDateChange}
              // onBlur={HandleDateChange}
            />
            {/* <Text style={{ color: "red" }}> {errorUpdatedDate} </Text> */}
            <Text
              style={{
                textAlign: "left",
                marginLeft: 10,
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {" "}
              Updated Date : {ShowDate ? <Text> {updatedDate} </Text> : null}
            </Text>
          </View>
          <View>
            <Button
              title="Valider La Date"
              type="clear"
              style={{ textAlign: "left", marginTop: 15, marginRight: 185 }}
              onPress={HandleShowDate}
            />{" "}
          </View>

          <View style={styles.doc}>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Date de Début planifiée:{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {initialDatePl}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Date Fin Planifiée :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {" "}
                {finalDatePl}{" "}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Date Début Actuel :
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {initialDateAct}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Date Fin Actuel :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {" "}
                {finalDateAct}
              </Text> */}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Avancement Global Planifié :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalAvPl}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Avancement Global Réel :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalAvAct}
              </Text> */}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Total Float :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalFloat}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
              }}
            >
              {" "}
              Mark_up Initial :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {markupPl}
              </Text> */}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
                marginLeft: 3,
              }}
            >
              Mark_up Actuel :
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {markupAct}
              </Text> */}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontSize: 15,
                  color: "#2DAAF1",
                }}
              >
                {" "}
                Total Facturation Prévisionnel :
                {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {FactPrev}
                </Text> */}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontSize: 15,
                  color: "#2DAAF1",
                }}
              >
                {" "}
                Total Encaissement Prévisionnel :
                {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {EncPrev}
                </Text> */}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontSize: 15,
                  color: "#2DAAF1",
                }}
              >
                {" "}
                Total Facturation Réel :{" "}
                {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {FactReel}
                </Text> */}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontSize: 15,
                  color: "#2DAAF1",
                }}
              >
                {" "}
                Total Encaissement Réel :{" "}
                {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {EncReel}
                </Text> */}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Button title="Project Details" onPress={HandleHideFirstPage} />
          </View>
        </View>
      ) : null}
      {!firstPage ? (
        <View>
          <View>
            <Text
              style={{
                textAlign: "left",
                marginLeft: 100,
                marginBottom: 100,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {" "}
              Updated Date : {ShowDate ? <Text> {updatedDate} </Text> : null}
            </Text>
          </View>
          {ChoiceSection ? (
            <View>
              {/* <Button
                title="Engineering Progress"
                type="clear"
                style={{ textAlign: "left", marginTop: 15, marginRight: 70 }}
                onPress={HandleHideEngeenier}
              />{" "}
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Button
                title="Procurement Progress"
                type="clear"
                style={{ textAlign: "left", marginTop: 15, marginRight: 70 }}
                onPress={HandleShowProcurement}
              />{" "}
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Button
                title="Construction Progress"
                type="clear"
                style={{ textAlign: "left", marginTop: 15, marginRight: 70 }}
                onPress={HandleShowConstruction}
              />{" "}
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Button
                title="Total Progress"
                type="clear"
                style={{ textAlign: "left", marginTop: 15, marginRight: 70 }}
                // onPress={HandleShowDate}
              />{" "}
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View> */}
              <KeyboardAwareScrollView
                style={{ marginVertical: 40 }}
                showsVerticalScrollIndicator={false}
              >
                <View>
                  {Object.values(dataDisip).map((dataDisips) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Disipline", dataDisips)
                      }
                    >
                      <View>
                        {" "}
                        <Text
                          style={{
                            fontSize: 17,
                            textAlign: "left",
                            display: "flex",
                            marginTop: 10,
                            backgroundColor: "#f5fcff",
                            borderBottomWidth: 1,
                            borderColor: "#ddd",
                            height: 50,
                            paddingLeft: 50,
                            color: "#2DAAF1",
                            marginBottom: 20,
                            // textAlign:"center",
                            // fontWeight: "700",
                          }}
                        >
                          {" "}
                          {dataDisips.descdisci}{" "}
                        </Text>{" "}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </KeyboardAwareScrollView>
            </View>
          ) : null}
          {ShowEngSection && !ChoiceSection ? (
            <View>
              {" "}
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 5,
                  marginBottom: 20,
                }}
              ></View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  marginTop: 10,
                  marginLeft: 90,
                  fontSize: 15,
                }}
              >
                {" "}
                Engineering Progress
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  marginTop: 200,
                  marginLeft: 90,
                  fontSize: 15,
                }}
              >
                {" "}
                Curve
              </Text>
              <Button
                style={{ marginTop: 250 }}
                title="More details"
                onPress={HandleShowDetailsEngineering}
              />
            </View>
          ) : null}
          {ShowMdr ? (
            <View style={{}}>
              {onProject.includes(navigation.getParam("id")) ? (
                <View>
                  <Text style={{ textAlign: "center" }}>
                    Number_Document_Register
                  </Text>
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderColor: "#ddd",
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  ></View>
                  <View>
                    <View style={styles.container}>
                      <Text
                        style={{
                          paddingBottom: 8,
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        I . F . R
                      </Text>

                      <VictoryChart>
                        <VictoryBar data={dataIFR.a} />
                        <VictoryBar data={dataIFR.b} />
                        <VictoryBar
                          data={dataIFR.planned}
                          style={{
                            data: { fill: "#2E58BF", strokeWidth: 30 },
                            paddingLeft: 10,
                          }}
                        />
                        <VictoryBar
                          data={dataIFR.actual}
                          style={{
                            data: { fill: "#F00", strokeWidth: 30 },
                          }}
                        />
                        <VictoryBar data={dataIFR.c} />
                        <VictoryBar data={dataIFR.d} />
                      </VictoryChart>
                    </View>
                  </View>
                  <PieChart
                    data={IFRdata}
                    width={screenWidth}
                    height={210}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[5, 5]}
                    absolute
                  />
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderColor: "#ddd",
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  ></View>
                  <View>
                    <View>
                      <View style={styles.container}>
                        <Text
                          style={{
                            paddingBottom: 8,
                            backgroundColor: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          I . F . A
                        </Text>

                        <VictoryChart>
                          <VictoryBar data={dataIFA.a} />
                          <VictoryBar data={dataIFA.b} />
                          <VictoryBar
                            data={dataIFA.planned}
                            style={{
                              data: { fill: "#2E58BF", strokeWidth: 30 },
                              paddingLeft: 10,
                            }}
                          />
                          <VictoryBar
                            data={dataIFA.actual}
                            style={{
                              data: { fill: "#F00", strokeWidth: 30 },
                            }}
                          />
                          <VictoryBar data={dataIFA.c} />
                          <VictoryBar data={dataIFA.d} />
                        </VictoryChart>
                      </View>
                    </View>
                    <PieChart
                      data={IFAdata}
                      width={screenWidth}
                      height={210}
                      chartConfig={chartConfig}
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[5, 5]}
                      absolute
                    />
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderColor: "#ddd",
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  ></View>
                  <View>
                    <View>
                      <View style={styles.container}>
                        <Text
                          style={{
                            paddingBottom: 8,
                            backgroundColor: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          I . F . C
                        </Text>

                        <VictoryChart>
                          <VictoryBar data={dataIFC.a} />
                          <VictoryBar data={dataIFC.b} />
                          <VictoryBar
                            data={dataIFC.planned}
                            style={{
                              data: { fill: "#2E58BF", strokeWidth: 30 },
                              paddingLeft: 10,
                            }}
                          />
                          <VictoryBar
                            data={dataIFC.actual}
                            style={{
                              data: { fill: "#F00", strokeWidth: 30 },
                            }}
                          />
                          <VictoryBar data={dataIFC.c} />
                          <VictoryBar data={dataIFC.d} />
                        </VictoryChart>
                      </View>
                    </View>
                    <PieChart
                      data={IFCdata}
                      width={screenWidth}
                      height={210}
                      chartConfig={chartConfig}
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[5, 5]}
                      absolute
                    />
                  </View>
                </View>
              ) : (
                <Text
                  style={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    marginTop: 200,
                    marginLeft: 90,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  MDR does not exist{" "}
                </Text>
              )}
            </View>
          ) : null}
          {ShowProSection ? (
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  marginTop: 200,
                  marginLeft: 90,
                  fontSize: 15,
                }}
              >
                {" "}
                Procurement Curve{" "}
              </Text>
              <Button
                style={{ marginTop: 250 }}
                title="More details"
                onPress={HandleShowDetailsProcurement}
              />
            </View>
          ) : null}
          {ShowPtr ? (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 2,
                  backgroundColor: "#ffff",
                  fontSize: 20,
                }}
              >
                {" "}
                Procurement_Trucking_Register
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Text
                style={{
                  paddingBottom: 30,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                R . F . Q . Issue
              </Text>

              <View>
                <View style={styles.container}>
                  <VictoryChart>
                    <VictoryBar data={dataRFQ.a} />
                    <VictoryBar data={dataRFQ.b} />
                    <VictoryBar
                      data={dataRFQ.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={dataRFQ.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={dataRFQ.c} />
                    <VictoryBar data={dataRFQ.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={RFQdata}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Text
                style={{
                  paddingBottom: 30,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Technical Commercial Evalution
              </Text>

              <View>
                <View style={styles.container}>
                  <VictoryChart>
                    <VictoryBar data={dataTEC.a} />
                    <VictoryBar data={dataTEC.b} />
                    <VictoryBar
                      data={dataTEC.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={dataTEC.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={dataTEC.c} />
                    <VictoryBar data={dataTEC.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={TECdata}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Text
                style={{
                  paddingBottom: 30,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Purchased.Order.Status
              </Text>

              <View>
                <View style={styles.container}>
                  <VictoryChart>
                    <VictoryBar data={dataPOS.a} />
                    <VictoryBar data={dataPOS.b} />
                    <VictoryBar
                      data={dataPOS.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={dataPOS.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={dataPOS.c} />
                    <VictoryBar data={dataPOS.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={POSdata}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 2,
                  backgroundColor: "#ffff",
                  fontSize: 20,
                }}
              >
                Shipment_Trucking_Register
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ></View>
              <View>
                <View style={styles.container}>
                  <VictoryChart>
                    <VictoryBar data={data_STR.a} />
                    <VictoryBar data={data_STR.b} />
                    <VictoryBar
                      data={data_STR.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={data_STR.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={data_STR.c} />
                    <VictoryBar data={data_STR.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={STR_data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#ddd",
                    marginTop: 10,
                    marginBottom: 30,
                  }}
                ></View>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 2,
                    backgroundColor: "#ffff",
                    fontSize: 20,
                  }}
                >
                  Expediting_Trucker_Register
                </Text>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#ddd",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                ></View>
                <Text
                  style={{
                    paddingBottom: 30,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  INSPECTION
                </Text>

                <View>
                  <View style={styles.container}>
                    <VictoryChart>
                      <VictoryBar data={data_INSPECTION.a} />
                      <VictoryBar data={data_INSPECTION.b} />
                      <VictoryBar
                        data={data_INSPECTION.planned}
                        style={{
                          data: { fill: "#2E58BF", strokeWidth: 20 },
                          paddingLeft: 10,
                        }}
                      />
                      <VictoryBar
                        data={data_INSPECTION.actual}
                        style={{
                          data: { fill: "#F00", strokeWidth: 20 },
                        }}
                      />
                      <VictoryBar data={data_INSPECTION.c} />
                      <VictoryBar data={data_INSPECTION.d} />
                    </VictoryChart>
                  </View>
                </View>
                <PieChart
                  data={INSPECTION_data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                />
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#ddd",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                ></View>
                <Text
                  style={{
                    paddingBottom: 30,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  F . O . B
                </Text>

                <View>
                  <View style={styles.container}>
                    <VictoryChart>
                      <VictoryBar data={data_FOB.a} />
                      <VictoryBar data={data_FOB.b} />
                      <VictoryBar
                        data={data_FOB.planned}
                        style={{
                          data: { fill: "#2E58BF", strokeWidth: 20 },
                          paddingLeft: 10,
                        }}
                      />
                      <VictoryBar
                        data={data_FOB.actual}
                        style={{
                          data: { fill: "#F00", strokeWidth: 20 },
                        }}
                      />
                      <VictoryBar data={data_FOB.c} />
                      <VictoryBar data={data_FOB.d} />
                    </VictoryChart>
                  </View>
                </View>
                <PieChart
                  data={FOB_data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                />
              </View>
            </View>
          ) : null}
          {ShowConstSection ? (
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  marginTop: 100,
                  marginLeft: 90,
                  fontSize: 15,
                }}
              >
                {" "}
                Construction Curve
              </Text>
              <Button
                style={{ marginTop: 250 }}
                title="More details"
                onPress={HandleShowDetailsConstruction}
              />
            </View>
          ) : null}
          {ShowConst ? (
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 2,
                marginTop: 100,
                marginLeft: 90,
                fontSize: 15,
              }}
            >
              {" "}
              Construction Details
            </Text>
          ) : null}
        </View>
      ) : null}
    </div>
  );
}
const styles = StyleSheet.create({
  Header: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    margin: 15,
    height: 40,
    //borderColor: "#F3F3F3",
    //borderWidth: 1,
    backgroundColor: "#FFF",
    //borderRadius: 15,
    outline: "none !important",
  },
  doc: {
    textAlign: "left",
    padding: 10,
    marginTop: 50,
    // borderTopWidth: 2,
    // borderColor: "#ddd",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 35,
  },
  tot: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
  },
  Disip: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
    color: "#4DC7F8",
    //fontWeight: "bold",
  },
});
export default ProjectShow;
