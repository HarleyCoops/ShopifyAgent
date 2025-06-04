import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider, Page, Card } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

function App() {
  return (
    <AppProvider>
      <Page title="CRO Agent Frontend">
        <Card sectioned>
          <p>Welcome to the CRO Agent Frontend!</p>
        </Card>
      </Page>
    </AppProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);