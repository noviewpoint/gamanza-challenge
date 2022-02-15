import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { PrismaService } from '../prisma.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GameService,
        {
          provide: PrismaService,
          useValue: {
            game: {
              findUnique: jest.fn().mockResolvedValue(null),
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`Return empty list of games`, async () => {
    const output = await service.findAll({
      skip: 1,
      limit: 1,
    });
    expect(output).toBeTruthy();
  });

  it(`Return non existing game`, async () => {
    const output = await service.findOne(1);
    expect(output).toBeFalsy();
  });
});
