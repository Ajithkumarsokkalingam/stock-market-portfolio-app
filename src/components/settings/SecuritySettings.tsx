import React from 'react';
import { Lock, Key, Shield } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <Key className="w-5 h-5 text-gray-400" />
          <div>
            <h3 className="font-medium">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-400">Add an extra layer of security</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
          Enable
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <Lock className="w-5 h-5 text-gray-400" />
          <div>
            <h3 className="font-medium">Change Password</h3>
            <p className="text-sm text-gray-400">Update your password regularly</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
          Update
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-gray-400" />
          <div>
            <h3 className="font-medium">Login History</h3>
            <p className="text-sm text-gray-400">View recent account activity</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
          View
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;