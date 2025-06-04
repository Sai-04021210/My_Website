export default function PortfolioPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-stone-900 dark:text-stone-100">Portfolio</h1>
      <div className="space-y-6">
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Multi-Protocol IIoT Gateway</h2>
          <p className="text-stone-700 dark:text-stone-300">Edge service translating legacy PLC traffic (Python, Docker, MQTT/OPC UA/REST). Benchmarked at 15,000+ msg/s on Raspberry Pi 4. <a href="https://github.com/Sai-04021210/multi-protocol-iot-gateway" className="text-blue-600 dark:text-blue-400 underline hover:text-orange-500 dark:hover:text-orange-400" target="_blank">Code</a></p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Smart-Grid Digital Twin</h2>
          <p className="text-stone-700 dark:text-stone-300">Digital twin aggregates live meter data and predicts 24h load (MAPE 5%) using LSTM. React/Node-RED dashboards. <a href="https://github.com/Sai-04021210/Smart-Grid-IoT-Analytics" className="text-blue-600 dark:text-blue-400 underline hover:text-orange-500 dark:hover:text-orange-400" target="_blank">Code</a></p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">AAS-Builder CLI</h2>
          <p className="text-stone-700 dark:text-stone-300">Command-line tool that auto-generates AAS sub-models from ERP tables, cutting onboarding time to &lt;5 min. (Python, Postgres, BaSyx). <a href="https://github.com/Sai-04021210/aas-builder-cli" className="text-blue-600 dark:text-blue-400 underline hover:text-orange-500 dark:hover:text-orange-400" target="_blank">Dev</a></p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">OPC UA → GraphQL Bridge</h2>
          <p className="text-stone-700 dark:text-stone-300">Micro-gateway exposing machine tags as GraphQL schema for BI dashboards (&lt;150 ms latency). (Node.js, TypeScript). <a href="https://github.com/Sai-04021210/opcua-graphql-bridge" className="text-blue-600 dark:text-blue-400 underline hover:text-orange-500 dark:hover:text-orange-400" target="_blank">Dev</a></p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Multi-Touch Robotic Arm</h2>
          <p className="text-stone-700 dark:text-stone-300">HMI uses force-sensor feedback for continuous control; autonomously picks & places LEGO bricks while learning joint offsets. (Python, Arduino, FSR)</p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Gaze-Controlled Robotic Arm</h2>
          <p className="text-stone-700 dark:text-stone-300">Eye-tracking app steers robotic arm; PixyCam hue detection targets and grasps objects. (Python, C++, Raspberry Pi 4, Arduino, PixyCam)</p>
        </div>
        <div className="border border-stone-300 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 shadow-lg">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Automatic Water-Tank Control (AWTC)</h2>
          <p className="text-stone-700 dark:text-stone-300">Simulated sensor network monitors tank levels and auto-actuates pumps; shipped as one-click Docker demo. (Node-RED, ESP32, MQTT). <a href="https://github.com/Sai-04021210/AWTC" className="text-blue-600 dark:text-blue-400 underline hover:text-orange-500 dark:hover:text-orange-400" target="_blank">Code</a></p>
        </div>
      </div>
    </div>
  );
}
