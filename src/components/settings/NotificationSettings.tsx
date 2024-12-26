import React from 'react';
import { Bell, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: React.ElementType;
}

const NotificationSettings = () => {
  const [settings, setSettings] = React.useState<NotificationSetting[]>([
    {
      id: 'price-alerts',
      title: 'Price Alerts',
      description: 'Get notified when stocks hit your target price',
      enabled: true,
      icon: DollarSign
    },
    {
      id: 'market-updates',
      title: 'Market Updates',
      description: 'Daily market opening and closing updates',
      enabled: true,
      icon: TrendingUp
    },
    {
      id: 'portfolio-alerts',
      title: 'Portfolio Alerts',
      description: 'Significant changes in your portfolio value',
      enabled: false,
      icon: TrendingDown
    }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting =>
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  return (
    <div className="space-y-6">
      {settings.map(setting => {
        const Icon = setting.icon;
        return (
          <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5 text-gray-400" />
              <div>
                <h3 className="font-medium">{setting.title}</h3>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting(setting.id)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                setting.enabled ? 'bg-emerald-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  setting.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationSettings;