import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';

const execAsync = promisify(exec);

@Injectable()
export class ServerManagerService {
  private readonly logger = new Logger(ServerManagerService.name);
  private readonly scriptsDir = join(__dirname, '..', '..', 'scripts');

  private async runScript(
    script: string,
    args: string[] = [],
  ): Promise<string> {
    const scriptPath = join(this.scriptsDir, script);
    const command = `bash "${scriptPath}" ${args.join(' ')}`;
    this.logger.log(`Executando: ${command}`);

    const { stdout, stderr } = await execAsync(command);

    if (stderr) {
      this.logger.warn(`stderr: ${stderr}`);
    }

    return stdout.trim();
  }

  async start(): Promise<string> {
    return this.runScript('start-server.sh');
  }

  async stop(): Promise<string> {
    return this.runScript('stop-server.sh');
  }

  async restart(waitSeconds = 5): Promise<string> {
    return this.runScript('restart-server.sh', [String(waitSeconds)]);
  }

  async status(): Promise<{ status: 'online' | 'offline' }> {
    const output = await this.runScript('status-server.sh');
    return { status: output === 'online' ? 'online' : 'offline' };
  }
}
