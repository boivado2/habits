import React from 'react';
import { View } from 'react-native';

export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <View className={`card ${className}`}>
      {children}
    </View>
  );
}