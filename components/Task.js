import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
	return (
		<View>
			<Text>{props.children || 'Untitled task'}</Text>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default Task;