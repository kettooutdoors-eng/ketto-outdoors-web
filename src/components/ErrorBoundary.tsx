import { Component, type ErrorInfo, type ReactNode } from 'react';
import { BannerButton } from './ui/BannerButton';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Ketto Outdoors — caught a render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: 480, margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 32 }}>Well, that one snapped the line.</h1>
          <p style={{ marginTop: 12, opacity: 0.8, fontSize: 15 }}>
            Something went wrong loading this page. It's on our end, not yours — try heading back home.
          </p>
          <BannerButton to="/" background="var(--forest)" color="var(--cream)" style={{ marginTop: 24, display: 'inline-flex' }}>
            Back to Ketto Outdoors
          </BannerButton>
        </div>
      );
    }
    return this.props.children;
  }
}
