import { ExecutionContext } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModuleOptions, ThrottlerStorage, ThrottlerLimitDetail } from '@nestjs/throttler';
import { Reflector } from '@nestjs/core';
export declare class CustomThrottlerGuard extends ThrottlerGuard {
    constructor(options: ThrottlerModuleOptions, storageService: ThrottlerStorage, reflector: Reflector);
    protected throwThrottlingException(context: ExecutionContext, throttlerLimitDetail: ThrottlerLimitDetail): Promise<void>;
}
