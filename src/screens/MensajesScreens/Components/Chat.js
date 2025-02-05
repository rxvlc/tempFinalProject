import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Chat({ chat, onPress }) {
  // Obtener el último mensaje del chat
  const lastMessage = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'No hay mensajes';

  return (
    <TouchableOpacity style={styles.chatContainer} onPress={() => onPress(chat)}>
      <Text style={styles.chatTitle}>{chat.name}</Text>
      <Text style={styles.lastMessage}>{lastMessage}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: 'gray',
  },
});