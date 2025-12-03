import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "./Text";

interface ButtonConfig {
  text: string;
  onPress?: () => void | Promise<void>;
  closeOnPress?: boolean; // Default: true - whether to close alert after press
}

interface CustomAlertProps {
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  image?: ImageSourcePropType | null;
  imageComponent?: ReactNode | null;
  lottieUrl?: string | null;
  lottieSource?: any | null; // For local lottie files
  primaryButton?: ButtonConfig | null;
  secondaryButton?: ButtonConfig | null;
  closeOnOverlayTap?: boolean | null;
  type?: "success" | "error" | "warning" | "info" | null;

  autoCloseAfter?: number | null;
}

// Alert Manager
class AlertManager {
  private static instance: AlertManager;
  private alertRef: ((props: CustomAlertProps) => void) | null = null;

  static getInstance(): AlertManager {
    if (!AlertManager.instance) {
      AlertManager.instance = new AlertManager();
    }
    return AlertManager.instance;
  }

  setAlertRef(ref: (props: CustomAlertProps) => void) {
    this.alertRef = ref;
  }

  show(props: CustomAlertProps) {
    if (this.alertRef) {
      this.alertRef(props);
    }
  }

  success(props: Omit<CustomAlertProps, "type">) {
    this.show({ ...props, type: "success" });
  }

  error(props: Omit<CustomAlertProps, "type">) {
    this.show({ ...props, type: "error" });
  }

  warning(props: Omit<CustomAlertProps, "type">) {
    this.show({ ...props, type: "warning" });
  }

  info(props: Omit<CustomAlertProps, "type">) {
    this.show({ ...props, type: "info" });
  }
}

// Default Lottie URLs for each type
const DefaultLottieUrls = {
  success:
    "https://lottie.host/dfa11c65-db4c-4987-be2a-30fe5daa9429/K8zxK5LkPX.json",
  error: "https://lottie.host/e1e9c0e0-8e5f-4b5a-b5e5-5e5e5e5e5e5e/error.json", // Replace with actual URL
  warning:
    "https://lottie.host/w1w9c0e0-8e5f-4b5a-b5e5-5e5e5e5e5e5e/warning.json", // Replace with actual URL
  info: "https://lottie.host/i1i9c0e0-8e5f-4b5a-b5e5-5e5e5e5e5e5e/info.json", // Replace with actual URL
};

// Fallback colored circles if Lottie fails or isn't provided
const DefaultIcons = {
  success: () => (
    <View style={[styles.defaultIcon, { backgroundColor: "#10B981" }]} />
  ),
  error: () => (
    <View style={[styles.defaultIcon, { backgroundColor: "#EF4444" }]} />
  ),
  warning: () => (
    <View style={[styles.defaultIcon, { backgroundColor: "#F59E0B" }]} />
  ),
  info: () => (
    <View style={[styles.defaultIcon, { backgroundColor: "#3B82F6" }]} />
  ),
};

// Alert Component
const AlertComponent = ({
  visible = false,
  onClose,
  title = "",
  subtitle = "",
  image = null,
  imageComponent = null,
  lottieUrl = null,
  lottieSource = null,
  primaryButton = null,
  secondaryButton = null,
  closeOnOverlayTap = true,
  type = null,
  autoCloseAfter,
}: CustomAlertProps) => {
  const [lottieError, setLottieError] = React.useState(false);

  const handleButtonPress = async (button: ButtonConfig) => {
    const shouldClose = button.closeOnPress !== false; // Default to true

    try {
      // Execute the button's onPress if it exists
      if (button.onPress) {
        await button.onPress();
      }

      // Close alert after function completes (if closeOnPress is not false)
      if (shouldClose && onClose) {
        onClose();
      }
    } catch (error) {
      // If function throws error, don't close the alert
      console.error("Alert button onPress error:", error);
    }
  };

  const handleOverlayPress = () => {
    if (closeOnOverlayTap && onClose) {
      onClose();
    }
  };

  // Reset lottie error when visibility changes
  React.useEffect(() => {
    if (visible) {
      setLottieError(false);
    }
  }, [visible]);

  // Auto-close after delay
  React.useEffect(() => {
    if (!visible || autoCloseAfter == null) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, autoCloseAfter);

    return () => clearTimeout(timer);
  }, [visible, autoCloseAfter, onClose]);

  // Determine which image/animation to show
  const getImageComponent = () => {
    // Priority 1: Custom imageComponent
    if (imageComponent) return imageComponent;

    // Priority 2: Custom Lottie URL or Source
    if (lottieUrl && !lottieError) {
      return (
        <LottieView
          source={{ uri: lottieUrl }}
          autoPlay
          loop
          style={styles.lottie}
          onAnimationFailure={() => setLottieError(true)}
        />
      );
    }

    if (lottieSource && !lottieError) {
      return (
        <LottieView
          source={lottieSource}
          autoPlay
          loop
          style={styles.lottie}
          onAnimationFailure={() => setLottieError(true)}
        />
      );
    }

    // Priority 3: Custom Image
    if (image) {
      return (
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
      );
    }

    // Priority 4: Default Lottie for type
    if (type && DefaultLottieUrls[type] && !lottieError) {
      return (
        <LottieView
          source={{ uri: DefaultLottieUrls[type] }}
          autoPlay
          loop
          style={styles.lottie}
          onAnimationFailure={() => setLottieError(true)}
        />
      );
    }

    // Priority 5: Fallback colored circle
    if (type && DefaultIcons[type]) {
      return DefaultIcons[type]();
    }

    return null;
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.overlay}
        onPress={handleOverlayPress}
      >
        <Pressable
          style={styles.alertContainer}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.contentContainer}>
            {/* Image/Animation Section */}
            {getImageComponent() && (
              <View style={styles.imageContainer}>{getImageComponent()}</View>
            )}

            {/* Title */}
            {title ? (
              <Text
                style={styles.title}
                font="poppins-medium"
              >
                {title}
              </Text>
            ) : null}

            {/* Subtitle */}
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

            {/* Buttons */}
            <View
              style={styles.buttonContainer}
              className="flex-row items-center justify-between"
            >
              {secondaryButton && (
                <TouchableOpacity
                  style={[styles.secondaryButton, { width: "48%" }]}
                  onPress={() => handleButtonPress(secondaryButton)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.secondaryButtonText}>
                    {secondaryButton.text}
                  </Text>
                </TouchableOpacity>
              )}

              {primaryButton && (
                <TouchableOpacity
                  style={[
                    styles.primaryButtonWrapper,
                    { width: secondaryButton ? "48%" : "100%" },
                  ]}
                  onPress={() => handleButtonPress(primaryButton)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={["#2563EB", "#6A1B9A"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.primaryButton}
                  >
                    <Text style={styles.primaryButtonText}>
                      {primaryButton.text}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alertProps, setAlertProps] = React.useState<CustomAlertProps>({
    visible: false,
  });

  React.useEffect(() => {
    AlertManager.getInstance().setAlertRef((props) => {
      setAlertProps({ ...props, visible: true });
    });
  }, []);

  const handleClose = () => {
    setAlertProps((prev) => ({ ...prev, visible: false }));
    if (alertProps.onClose) {
      alertProps.onClose();
    }
  };

  return (
    <>
      {children}
      <AlertComponent
        {...alertProps}
        onClose={handleClose}
      />
    </>
  );
};

export const Alert = {
  success: (props: Omit<CustomAlertProps, "type">) => {
    AlertManager.getInstance().success(props);
  },
  error: (props: Omit<CustomAlertProps, "type">) => {
    AlertManager.getInstance().error(props);
  },
  warning: (props: Omit<CustomAlertProps, "type">) => {
    AlertManager.getInstance().warning(props);
  },
  info: (props: Omit<CustomAlertProps, "type">) => {
    AlertManager.getInstance().info(props);
  },
  show: (props: CustomAlertProps) => {
    AlertManager.getInstance().show(props);
  },
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  alertContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  contentContainer: {
    alignItems: "center",
  },
  imageContainer: {
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  lottie: {
    width: 120,
    height: 120,
  },
  defaultIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  primaryButtonWrapper: {
    // width: "100%",
    borderRadius: 50,
    overflow: "hidden",
    shadowColor: "#8B5CF6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: "#6B7280",
    fontSize: 18,
    fontWeight: "600",
  },
});

/*
// 2. Use anywhere in your app:

// ===== BASIC USAGE =====

// Simple alert - closes automatically when button is pressed
Alert.success({
  title: 'Success!',
  subtitle: "Your child's account has been created",
  primaryButton: {
    text: 'OK',
    // No onPress - alert will just close
  },
});

// Alert with function - runs function then closes
Alert.success({
  title: 'Payment Complete',
  subtitle: 'Your payment was successful',
  primaryButton: {
    text: 'Continue',
    onPress: () => {
      console.log('Navigate to home');
      router.push('/home');
    }
    // Alert closes after onPress completes
  },
});


// ===== ASYNC OPERATIONS =====

// Async function - waits for completion before closing
Alert.warning({
  title: 'Delete Account?',
  subtitle: 'This action cannot be undone',
  primaryButton: {
    text: 'Delete',
    onPress: async () => {
      await deleteUserAccount(); // Alert stays open until this completes
      // Alert closes after successful completion
    },
  },
  secondaryButton: {
    text: 'Cancel',
    // Just closes the alert
  },
});

// ===== PREVENT AUTO-CLOSE =====

// Keep alert open after button press
Alert.info({
  title: 'Loading...',
  subtitle: 'Processing your request',
  primaryButton: {
    text: 'Start Process',
    closeOnPress: false, // Alert stays open!
    onPress: async () => {
      // await longRunningProcess();
      // Alert remains open - you control when to close it
    },
  },
});

// ===== ERROR HANDLING =====

// If function throws error, alert stays open
Alert.error({
  title: 'Submit Form',
  primaryButton: {
    text: 'Submit',
    onPress: async () => {
      const result = await submitForm();
      if (!result.success) {
        throw new Error('Submission failed');
        // Alert stays open because of error
      }
      // Alert closes only if no error thrown
    },
  },
});

// ===== WITH LOTTIE ANIMATIONS =====

// Success with custom Lottie URL
Alert.success({
  title: 'Payment Complete',
  subtitle: 'Your payment was successful',
  lottieUrl: 'https://lottie.host/your-custom-animation.json',
  primaryButton: {
    text: 'Continue',
    onPress: () => console.log('Continue'),
  },
});

// Error with custom local Lottie file
Alert.error({
  title: 'Error',
  subtitle: 'Something went wrong',
  lottieSource: require('./animations/error.json'),
  primaryButton: {
    text: 'Try Again',
    onPress: () => console.log('Retry'),
  },
});
*/
