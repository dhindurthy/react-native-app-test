
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    StyleSheet,
    Text, View, Button,TextInput,FlatList
} from 'react-native';
import {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return (
    <View accessible={true} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Heading {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          
          navigation.navigate('Details', {
            fname: fname,
            lname: lname
          });
        }}
      />
      <View accessible={true} style = {styles.container}>
      
            <TextInput style = {
                {
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }
            }
            defaultValue = {fname}
            label = "Enter something"
            onChangeText={fname => setFName(fname)}
            >
            </TextInput> 
            
            <TextInput style = {
                {
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }
            }
            defaultValue = {lname}
            placeholder = "Enter something"
            onChangeText={lname => setLName(lname)}
             >
            </TextInput> 
      </View>
    </View>
  );
}
function FullnameScreen({route, navigation}) {
  const { fname } = route.params;
  const { lname } = route.params;

  return (
    <View accessible={true} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Full Name Screen Heading</Text>
      <Text>Full Name: {JSON.stringify(fname)} {JSON.stringify(lname)}</Text>
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const { fname } = route.params;
  const { lname } = route.params;

  return (
    <View accessible={true} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Full Name" 
          onPress={() => navigation.navigate('Fullname', {
              fname: fname,
              lname: lname,
              name: fname+lname
            })
          } 
      />
      <Text>Details Screen Heading</Text>
      <Text>First Name: {JSON.stringify(fname)}</Text>
      <Text>Last Name: {JSON.stringify(lname)}</Text>
    </View>
  );
}
// function LandingScreen({route, navigation}) {
//   return(
//     <View accessible={true} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     <Text>LandingScreen LandingScreen LandingScreen LandingScreen LandingScreen LandingScreen</Text>
//     </View>
//   );
// }// <Tab.Screen name="Landing" component={LandingScreen} />

function SkillProfileScreen({route, navigation}) {
  return(
    <Text>SkillProfileScreen SkillProfileScreen SkillProfileScreen </Text>
  );
}
function SpecializationProfileScreen({route, navigation}) {
  return(
    <Text>SpecializationProfileScreen SpecializationProfileScreen SpecializationProfileScreen</Text>
  );
}
function ExperienceProfileScreen({route, navigation}) {
  return(
    <Text>ExperienceProfileScreen ExperienceProfileScreen  ExperienceProfileScreen</Text>
  );
}
function CodeProfileScreen({route, navigation}) {
  return(
    <Text>CodeProfileScreen CodeProfileScreen CodeProfileScreen </Text>
  );
} 

function ProfileScreen({route, navigation}) {
  return (
    <View accessible={true} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <FlatList style={styles.item}
          data={[
          
            {key: 'Skills'},
            {key: 'Specialization'},
            {key: 'Experiences'},
            {key: 'Code Samples'},
          ]}
          renderItem={({item}) => 
            <Button style={styles.item} onPress={() => navigation.navigate(item.key)} title={item.key}></Button>
          }
        />
    </View>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen({route, navigation}) {
  return (
    <ProfileStack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato' },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
      <ProfileStack.Screen name="Skills" component={SkillProfileScreen} 
      options={{ headerBackTitle:"Profile" ,headerBackTitleVisible: true}}/>
      <ProfileStack.Screen name="Specialization" component={SpecializationProfileScreen}
      options={{ headerBackTitle:"Profile" ,headerBackTitleVisible: true}}/>
      <ProfileStack.Screen name="Experiences" component={ExperienceProfileScreen}
      options={{ headerBackTitle:"Profile" ,headerBackTitleVisible: true}}/>
      <ProfileStack.Screen name="Code Samples" component={CodeProfileScreen}
      options={{ headerBackTitle:"Profile" ,headerBackTitleVisible: true}}/>
    </ProfileStack.Navigator>
    );
}


function ContactScreen() {
  return (
    <View accessible={true} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>whatever contacts!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato' },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} 
          options={{
            title: "My Home",
            transitionSpec: {
              open: config,
              close: config,
            },
            // headerRight: () => <Button onPress={() => Experience('This is a button!')} title="Info"/>),
          }}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} 
          options={{ headerBackTitle:"Edit Details" ,headerBackTitleVisible: true}}
          />
      <HomeStack.Screen name="Fullname" component={FullnameScreen} 
            options={({ route }) => ({ 
              title: route.params.name, 
              headerBackTitle:"Look at Details" ,
              headerBackTitleVisible: true})
            }
            // options={{ title: 'My fullxxx' }}
            // options={{ headerTitle: props => <Component {...props} /> }}
      />
    </HomeStack.Navigator>
  );
}

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    return ( 
      <>
      <NavigationContainer>
        <Tab.Navigator >
          
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      
    </>
    );
}
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 2500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
      padding: 20,
      fontSize: 18,
      height: 87,
    },
});