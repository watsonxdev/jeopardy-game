import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function App() {
  const [screen, setScreen] = useState("start");
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState(0);

  const openQuestion = (newCategory: string, newValue: number) => {
    setCategory(newCategory);
    setValue(newValue);
    setScreen("question");
  };

  return (
    <View style={styles.container}>
      {/* START SCREEN */}
      {screen === "start" && (
        <ImageBackground
          source={{
            uri: "https://codehs.com/uploads/7743580dc103ad3b519bb04c5e08bc39",
          }}
          style={styles.startScreen}
        >
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setScreen("game")}
          >
            <Text style={styles.startButtonText}>START</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}

      {/* GAME BOARD */}
      {screen === "game" && (
        <View style={styles.gameBoardBackground}>
          <Text style={styles.title}>JEOPARDY</Text>

          <ScrollView contentContainerStyle={styles.board}>
            {/* PICK A CHILD */}
            <Text style={styles.categoryHeader}>Pick a Child</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Pick a Child", 200)}
              >
                <Text style={styles.gameButtonText}>$200</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Pick a Child", 400)}
              >
                <Text style={styles.gameButtonText}>$400</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Pick a Child", 600)}
              >
                <Text style={styles.gameButtonText}>$600</Text>
              </TouchableOpacity>
            </View>

            {/* FACTS */}
            <Text style={styles.categoryHeader}>Facts About Your Kids</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Facts About Your Kids", 200)}
              >
                <Text style={styles.gameButtonText}>$200</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Facts About Your Kids", 400)}
              >
                <Text style={styles.gameButtonText}>$400</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Facts About Your Kids", 600)}
              >
                <Text style={styles.gameButtonText}>$600</Text>
              </TouchableOpacity>
            </View>

            {/* TEST YOUR KNOWLEDGE */}
            <Text style={styles.categoryHeader}>Test Your Knowledge</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Test Your Knowledge", 200)}
              >
                <Text style={styles.gameButtonText}>$200</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Test Your Knowledge", 400)}
              >
                <Text style={styles.gameButtonText}>$400</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => openQuestion("Test Your Knowledge", 600)}
              >
                <Text style={styles.gameButtonText}>$600</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}

      {/* QUESTION SCREEN */}
      {screen === "question" && (
        <View style={styles.questionBackground}>
          <Text style={styles.questionCategory}>
            {category} for ${value}
          </Text>

          <Text style={styles.questionText}>Who's your favorite kid?</Text>

          <TouchableOpacity
            style={styles.answerButton}
            onPress={() => setScreen("wrong")}
          >
            <Text style={styles.answerText}>Sabrina</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.answerButton}
            onPress={() => setScreen("wrong")}
          >
            <Text style={styles.answerText}>Jacob</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.answerButton}
            onPress={() => setScreen("right")}
          >
            <Text style={styles.answerText}>Danyel</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* WRONG SCREEN */}
      {screen === "wrong" && (
        <ImageBackground
          source={{
            uri: "https://codehs.com/uploads/aa8256a8f2ba3e1aa39a866255473196",
          }}
          style={styles.resultScreen}
        >
          <Text style={styles.resultText}>WRONG</Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setScreen("game")}
          >
            <Text style={styles.backButtonText}>Back to Board</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}

      {/* RIGHT SCREEN */}
      {screen === "right" && (
        <ImageBackground
          source={{
            uri: "https://codehs.com/uploads/78bc48ac7cbc21138528b87c2a180dee",
          }}
          style={styles.resultScreen}
        >
          <Text style={styles.resultText}>CORRECT</Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setScreen("game")}
          >
            <Text style={styles.backButtonText}>Back to Board</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  startButton: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#dc93a6",
  },

  startButtonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },

  gameBoardBackground: {
    flex: 1,
    backgroundColor: "#2b3698",
    paddingTop: 60,
  },

  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  board: {
    alignItems: "center",
    paddingBottom: 40,
  },

  categoryHeader: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },

  gameButton: {
    backgroundColor: "#1d2f8f",
    width: deviceWidth / 4,
    height: deviceHeight / 8,
    margin: 8,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  gameButtonText: {
    color: "#ffc000",
    fontSize: 28,
    fontWeight: "bold",
  },

  questionBackground: {
    flex: 1,
    backgroundColor: "#2b3698",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  questionCategory: {
    color: "#ffc000",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  questionText: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 40,
  },

  answerButton: {
    backgroundColor: "#1d2f8f",
    width: "80%",
    padding: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
  },

  answerText: {
    color: "white",
    fontSize: 26,
  },

  resultScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  resultText: {
    color: "white",
    fontSize: 52,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },

  backButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  backButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
